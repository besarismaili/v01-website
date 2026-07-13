const { useState, useEffect, useMemo, useRef, useCallback } = React;

// ---------- supabase ----------
const SUPABASE_URL = 'https://pmkiunjdkibhjabnyeyl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_EbhbY5qX8DRA6mc4aif18Q_dQtnuRWP';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ---------- icons ----------
const Icon = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>,
  plus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 5v14M5 12h14"/></svg>,
  pencil: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M16 4l4 4-12 12H4v-4z"/></svg>,
  trash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>,
  copy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/></svg>,
  eye: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 5l14 14M19 5L5 19"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12l5 5 9-11"/></svg>,
  filter: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 5h18l-7 9v6l-4-2v-4z"/></svg>,
  list: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  star: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l3 6 6 1-4.5 4.5L18 21l-6-3-6 3 1.5-6.5L3 10l6-1z"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M14 5l7 7-7 7"/></svg>,
  logout: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>,
};

const CATEGORIES = ['Brand Film','Commercial','Music Video','Short Film','VFX / Post'];
const STATUSES   = ['Published','Draft','Scheduled','Archived'];
const DIRECTORS  = ['Mara Voss','Jin Reyes','Sofia Marin','Theo Park'];
const SUPES      = ['Idris Khoury','Theo Park','Lena Ortiz','Owen Vasquez'];

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ---------- main app ----------
function App(){
  const [session, setSession]   = useState(undefined); // undefined = loading, null = no session
  const [items, setItems]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [query, setQuery]       = useState('');
  const [filterCat, setFilterCat]       = useState(new Set());
  const [filterStatus, setFilterStatus] = useState(new Set());
  const [showFilterCat, setShowFilterCat]       = useState(false);
  const [showFilterStatus, setShowFilterStatus] = useState(false);
  const [view, setView]         = useState('list');
  const [sortBy, setSortBy]     = useState({ key:'updated_at', dir:'desc' });
  const [selected, setSelected] = useState(new Set());
  const [drawer, setDrawer]     = useState(null);
  const [confirm, setConfirm]   = useState(null);
  const [toast, setToast]       = useState(null);
  const [page, setPage]         = useState(1);
  const PER_PAGE = 8;

  // auth check
  useEffect(() => {
    sb.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      if (!s) window.location.href = 'login.html';
    });
    const { data: { subscription } } = sb.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (!s) window.location.href = 'login.html';
    });
    return () => subscription.unsubscribe();
  }, []);

  // fetch projects
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const { data, error } = await sb
      .from('projects')
      .select('*')
      .order('updated_at', { ascending: false });
    if (!error && data) setItems(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (session) fetchProjects();
  }, [session, fetchProjects]);

  // close popovers on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.filter-wrap')) {
        setShowFilterCat(false);
        setShowFilterStatus(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // toast auto-dismiss
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(t);
  }, [toast]);

  const filtered = useMemo(() => {
    let arr = items.slice();
    if (query.trim()){
      const q = query.toLowerCase();
      arr = arr.filter(p => p.title.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.director.toLowerCase().includes(q) || (p.tags || []).some(t => t.includes(q)));
    }
    if (filterCat.size)    arr = arr.filter(p => filterCat.has(p.category));
    if (filterStatus.size) arr = arr.filter(p => filterStatus.has(p.status));
    arr.sort((a,b) => {
      const k = sortBy.key, d = sortBy.dir === 'asc' ? 1 : -1;
      if (k === 'updated_at'){ return d * (new Date(a.updated_at) - new Date(b.updated_at)); }
      if (typeof a[k] === 'number') return d * (a[k] - b[k]);
      return d * String(a[k] || '').localeCompare(String(b[k] || ''));
    });
    return arr;
  }, [items, query, filterCat, filterStatus, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageItems  = filtered.slice((page-1)*PER_PAGE, page*PER_PAGE);
  useEffect(() => { if (page > totalPages) setPage(1); }, [filtered.length, totalPages]);

  const stats = useMemo(() => ({
    total:     items.length,
    published: items.filter(p => p.status === 'Published').length,
    drafts:    items.filter(p => p.status === 'Draft').length,
    featured:  items.filter(p => p.featured).length,
    shots:     items.reduce((a,p) => a + (p.shots || 0), 0),
  }), [items]);

  const toggleSelect = (id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };
  const toggleSelectAll = () => {
    const allOnPage = pageItems.every(p => selected.has(p.id));
    const next = new Set(selected);
    pageItems.forEach(p => allOnPage ? next.delete(p.id) : next.add(p.id));
    setSelected(next);
  };
  const toggleFilter = (set, val, setter) => {
    const next = new Set(set);
    next.has(val) ? next.delete(val) : next.add(val);
    setter(next);
  };
  const clearFilters = () => { setQuery(''); setFilterCat(new Set()); setFilterStatus(new Set()); };
  const setSort = (key) => {
    setSortBy(s => s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir:'desc' });
  };

  const onSave = async (item) => {
    const { id, created_at, ...rest } = item;
    if (id) {
      const { error } = await sb.from('projects').update(rest).eq('id', id);
      if (error) { setToast({ msg: 'Error: ' + error.message }); return; }
      setToast({ msg: 'Project Saved' });
    } else {
      const { error } = await sb.from('projects').insert(rest);
      if (error) { setToast({ msg: 'Error: ' + error.message }); return; }
      setToast({ msg: 'Project Created' });
    }
    setDrawer(null);
    fetchProjects();
  };

  const onDelete = async (ids) => {
    const removed = items.filter(p => ids.includes(p.id));
    const { error } = await sb.from('projects').delete().in('id', ids);
    if (error) { setToast({ msg: 'Error: ' + error.message }); return; }
    setSelected(new Set());
    setConfirm(null);
    setDrawer(null);
    setToast({
      msg: ids.length > 1 ? `${ids.length} Projects Deleted` : `Deleted "${removed[0]?.title}"`,
    });
    fetchProjects();
  };

  const onDuplicate = async (item) => {
    const { id, created_at, updated_at, ...rest } = item;
    rest.title = item.title + ' (Copy)';
    rest.status = 'Draft';
    rest.featured = false;
    const { error } = await sb.from('projects').insert(rest);
    if (error) { setToast({ msg: 'Error: ' + error.message }); return; }
    setToast({ msg: 'Duplicated to draft' });
    fetchProjects();
  };

  const onToggleFeature = async (id) => {
    const project = items.find(p => p.id === id);
    if (!project) return;
    const { error } = await sb.from('projects').update({ featured: !project.featured }).eq('id', id);
    if (!error) fetchProjects();
  };

  const onBulkStatus = async (ids, status) => {
    const updates = { status };
    if (status === 'Archived') updates.featured = false;
    const { error } = await sb.from('projects').update(updates).in('id', ids);
    if (!error) {
      setSelected(new Set());
      setToast({ msg: `${ids.length} ${status}` });
      fetchProjects();
    }
  };

  const onSignOut = async () => {
    await sb.auth.signOut();
  };

  // loading / auth gate
  if (session === undefined) {
    return <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'var(--mono)',fontSize:12,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--fg-mute)'}}>Loading…</div>;
  }
  if (!session) return null;

  const userEmail = session.user?.email || 'Admin';

  return (
    <>
      <header className="admin-bar">
        <div className="inner">
          <div className="brand">
            <div className="logo">V01</div>
            <div className="scope">Studio Console</div>
          </div>
          <div className="crumbs">
            <a href="index.html">Site</a>
            <span>/</span>
            <span>Admin</span>
            <span>/</span>
            <span style={{color:'var(--fg)'}}>Projects</span>
          </div>
          <div className="right">
            <div className="live"><div className="dot"></div>Live</div>
            <div className="user"><div className="av"></div>{userEmail.split('@')[0]}</div>
            <button className="icon-btn" title="Sign out" onClick={onSignOut} style={{width:30,height:30,border:'1px solid var(--line)',background:'transparent',color:'var(--fg-dim)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>{Icon.logout}</button>
          </div>
        </div>
      </header>

      <div className="shell">
        <aside className="side">
          <h6>Manage</h6>
          <nav>
            <a className="active" href="#"><span>Projects</span><span className="count">{stats.total}</span></a>
            <a href="#"><span>Case Studies</span><span className="count">—</span></a>
            <a href="#"><span>Clients</span><span className="count">—</span></a>
            <a href="#"><span>People</span><span className="count">—</span></a>
            <a href="#"><span>Open Roles</span><span className="count">—</span></a>
          </nav>
          <h6>Content</h6>
          <nav>
            <a href="#"><span>Pages</span><span className="count">—</span></a>
            <a href="#"><span>Press</span><span className="count">—</span></a>
            <a href="#"><span>Journal</span><span className="count">—</span></a>
            <a href="#"><span>Media Library</span><span className="count">—</span></a>
          </nav>
          <h6>Settings</h6>
          <nav>
            <a href="#"><span>Site</span></a>
            <a href="#"><span>Team Access</span></a>
            <a href="#"><span>Integrations</span></a>
          </nav>
        </aside>

        <main className="main">
          <div className="pg-head">
            <div>
              <h1>Projects</h1>
              <div className="meta"><b>{filtered.length}</b> of {items.length}{loading ? ' · syncing…' : ''}</div>
            </div>
            <div className="actions">
              <button className="btn-sm" onClick={fetchProjects}>↻ Refresh</button>
              <button className="btn-sm primary" onClick={() => setDrawer({ mode:'new', item: blankProject() })}>
                + New Project
              </button>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-cell"><div className="num">{stats.total}</div><div className="lbl">Total Projects</div></div>
            <div className="stat-cell"><div className="num">{stats.published}</div><div className="lbl">Published</div></div>
            <div className="stat-cell"><div className="num">{stats.drafts}</div><div className="lbl">In Draft</div></div>
            <div className="stat-cell"><div className="num">{stats.featured}</div><div className="lbl">Featured On Site</div></div>
            <div className="stat-cell"><div className="num">{stats.shots.toLocaleString()}</div><div className="lbl">Shots Delivered</div></div>
          </div>

          <div className="toolbar">
            <div className="search">
              {Icon.search}
              <input type="text" placeholder="Search projects, clients, tags…" value={query} onChange={e => setQuery(e.target.value)} />
            </div>
            <div className="filter-wrap">
              <button className={'filter-btn ' + (filterCat.size ? 'on':'')} onClick={(e) => { e.stopPropagation(); setShowFilterCat(s => !s); setShowFilterStatus(false); }}>
                {Icon.filter}<span>Category {filterCat.size ? `· ${filterCat.size}` : ''}</span>
              </button>
              {showFilterCat && (
                <div className="pop" onClick={e => e.stopPropagation()}>
                  <div className="head">Filter by Category</div>
                  {CATEGORIES.map(c => (
                    <div key={c} className={'opt ' + (filterCat.has(c) ? 'on':'')} onClick={() => toggleFilter(filterCat, c, setFilterCat)}>
                      <span>{c}</span><span className="ck">✓</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="filter-wrap">
              <button className={'filter-btn ' + (filterStatus.size ? 'on':'')} onClick={(e) => { e.stopPropagation(); setShowFilterStatus(s => !s); setShowFilterCat(false); }}>
                {Icon.filter}<span>Status {filterStatus.size ? `· ${filterStatus.size}` : ''}</span>
              </button>
              {showFilterStatus && (
                <div className="pop" onClick={e => e.stopPropagation()}>
                  <div className="head">Filter by Status</div>
                  {STATUSES.map(s => (
                    <div key={s} className={'opt ' + (filterStatus.has(s) ? 'on':'')} onClick={() => toggleFilter(filterStatus, s, setFilterStatus)}>
                      <span>{s}</span><span className="ck">✓</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="filter-btn" onClick={clearFilters} disabled={!query && !filterCat.size && !filterStatus.size} style={{opacity: (!query && !filterCat.size && !filterStatus.size) ? 0.4 : 1}}>Reset</button>
            <div className="view-toggle">
              <button className={view === 'list' ? 'on':''} onClick={() => setView('list')} aria-label="List view">{Icon.list}</button>
              <button className={view === 'grid' ? 'on':''} onClick={() => setView('grid')} aria-label="Grid view">{Icon.grid}</button>
            </div>
          </div>

          {(filterCat.size > 0 || filterStatus.size > 0 || query) && (
            <div className="chips">
              {query && <div className="chip"><span>Search: <b>{query}</b></span><span className="x" onClick={() => setQuery('')}>×</span></div>}
              {[...filterCat].map(c => <div key={c} className="chip"><span>Cat: <b>{c}</b></span><span className="x" onClick={() => toggleFilter(filterCat, c, setFilterCat)}>×</span></div>)}
              {[...filterStatus].map(s => <div key={s} className="chip"><span>Status: <b>{s}</b></span><span className="x" onClick={() => toggleFilter(filterStatus, s, setFilterStatus)}>×</span></div>)}
              <div className="chip clear" onClick={clearFilters}>Clear all</div>
            </div>
          )}

          {loading ? (
            <div className="empty">
              <h3>Loading projects…</h3>
              <p>Fetching from Supabase.</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="empty">
              <h3>No projects match.</h3>
              <p>Try clearing filters or change the search.</p>
              <button className="btn-sm" onClick={clearFilters}>Clear filters</button>
            </div>
          ) : view === 'list' ? (
            <ProjectTable
              items={pageItems}
              selected={selected}
              onToggleSelect={toggleSelect}
              onToggleAll={toggleSelectAll}
              onEdit={item => setDrawer({ mode:'edit', item })}
              onDelete={item => setConfirm({ ids:[item.id] })}
              onDuplicate={onDuplicate}
              onToggleFeature={onToggleFeature}
              sortBy={sortBy}
              setSort={setSort}
              allChecked={pageItems.length > 0 && pageItems.every(p => selected.has(p.id))}
            />
          ) : (
            <ProjectCards
              items={pageItems}
              onEdit={item => setDrawer({ mode:'edit', item })}
              onDelete={item => setConfirm({ ids:[item.id] })}
              onDuplicate={onDuplicate}
              onToggleFeature={onToggleFeature}
            />
          )}

          {!loading && filtered.length > 0 && (
            <div className="pag">
              <div className="info">Showing <b style={{color:'var(--fg)'}}>{(page-1)*PER_PAGE + 1}</b>–<b style={{color:'var(--fg)'}}>{Math.min(page*PER_PAGE, filtered.length)}</b> of {filtered.length}</div>
              <div className="nav">
                <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1}>‹</button>
                {Array.from({length: totalPages}, (_, i) => (
                  <button key={i} className={page === i+1 ? 'on':''} onClick={() => setPage(i+1)}>{i+1}</button>
                ))}
                <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page === totalPages}>›</button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* bulk actions */}
      <div className={'bulk-bar ' + (selected.size > 0 ? 'show':'')}>
        <div className="count"><b>{selected.size}</b> selected</div>
        <div className="sep"></div>
        <button onClick={() => onBulkStatus([...selected], 'Published')}>Publish</button>
        <button onClick={() => onBulkStatus([...selected], 'Archived')}>Archive</button>
        <button className="danger" onClick={() => setConfirm({ ids:[...selected] })}>Delete</button>
        <div className="sep"></div>
        <button onClick={() => setSelected(new Set())}>Clear</button>
      </div>

      {/* drawer */}
      <div className={'drawer-mask ' + (drawer ? 'open':'')} onClick={() => setDrawer(null)}></div>
      <div className={'drawer ' + (drawer ? 'open':'')}>
        {drawer && (
          <ProjectDrawer
            key={drawer.item.id || 'new'}
            mode={drawer.mode}
            item={drawer.item}
            onSave={onSave}
            onClose={() => setDrawer(null)}
            onDelete={() => setConfirm({ ids:[drawer.item.id] })}
            onDuplicate={() => { onDuplicate(drawer.item); setDrawer(null); }}
          />
        )}
      </div>

      {/* confirm modal */}
      <div className={'modal-mask ' + (confirm ? 'open':'')} onClick={() => setConfirm(null)}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          {confirm && (() => {
            const targets = items.filter(p => confirm.ids.includes(p.id));
            const single = targets.length === 1;
            return (
              <>
                <h3>{single ? 'Delete project?' : `Delete ${targets.length} projects?`}</h3>
                <p>
                  {single ? <>You're about to delete <b>"{targets[0].title}"</b>. This will remove it from the public site immediately.</> : <>You're about to delete <b>{targets.length}</b> projects. They'll be removed from the public site immediately.</>}
                </p>
                <div className="actions">
                  <button className="btn-sm" onClick={() => setConfirm(null)}>Cancel</button>
                  <button className="btn-sm" onClick={() => onDelete(confirm.ids)} style={{borderColor:'#e08a76',color:'#e08a76'}}>Delete</button>
                </div>
              </>
            );
          })()}
        </div>
      </div>

      {/* toast */}
      <div className={'toast ' + (toast ? 'show':'')}>
        {toast && <span>{toast.msg}</span>}
      </div>
    </>
  );
}

// ---------- table view ----------
function ProjectTable({ items, selected, onToggleSelect, onToggleAll, onEdit, onDelete, onDuplicate, onToggleFeature, sortBy, setSort, allChecked }){
  const Sh = ({ k, label }) => (
    <th className={sortBy.key === k ? 'sorted':''} onClick={() => setSort(k)}>
      {label}<span className="so">{sortBy.key === k ? (sortBy.dir === 'asc' ? '↑' : '↓') : '↕'}</span>
    </th>
  );
  return (
    <table className="tbl">
      <thead>
        <tr>
          <th className="checkcol">
            <div className={'check ' + (allChecked ? 'on':'')} onClick={onToggleAll}>{Icon.check}</div>
          </th>
          <Sh k="title"      label="Project" />
          <Sh k="category"   label="Category" />
          <Sh k="client"     label="Client" />
          <Sh k="year"       label="Year" />
          <Sh k="shots"      label="Shots" />
          <Sh k="status"     label="Status" />
          <Sh k="updated_at" label="Updated" />
          <th style={{textAlign:'right'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(p => (
          <tr key={p.id} className={selected.has(p.id) ? 'selected':''}>
            <td className="checkcol">
              <div className={'check ' + (selected.has(p.id) ? 'on':'')} onClick={() => onToggleSelect(p.id)}>{Icon.check}</div>
            </td>
            <td>
              <div className="title-cell">
                {p.thumbnail ? (
                  <img src={p.thumbnail} className={'thumb ' + (p.featured ? 'featured':'')} style={{objectFit:'cover'}} />
                ) : (
                  <div className={'thumb ' + (p.featured ? 'featured':'')}></div>
                )}
                <div className="t">
                  <b>{p.title}</b>
                  <span>{p.runtime} · {p.director}</span>
                </div>
              </div>
            </td>
            <td><span className="cat-pill">{p.category}</span>{p.credit_type === 'Founder Prior Work' && <span className="cat-pill" style={{marginLeft:4,borderColor:'var(--fg-mute)',color:'var(--fg-mute)'}}>FC</span>}</td>
            <td>{p.credit_type === 'Founder Prior Work' ? (p.studio || '—') : p.client}</td>
            <td>{p.year}</td>
            <td>{p.shots}</td>
            <td><span className={'pill ' + p.status.toLowerCase()}>{p.status}</span></td>
            <td style={{color:'var(--fg-dim)'}}>{formatDate(p.updated_at)}</td>
            <td>
              <div className="row-actions">
                <button className="icon-btn" title={p.featured ? 'Unfeature':'Feature'} onClick={() => onToggleFeature(p.id)} style={p.featured ? {borderColor:'var(--fg)',color:'var(--fg)'} : {}}>{Icon.star}</button>
                <button className="icon-btn" title="View" onClick={() => onEdit(p)}>{Icon.eye}</button>
                <button className="icon-btn" title="Edit" onClick={() => onEdit(p)}>{Icon.pencil}</button>
                <button className="icon-btn" title="Duplicate" onClick={() => onDuplicate(p)}>{Icon.copy}</button>
                <button className="icon-btn danger" title="Delete" onClick={() => onDelete(p)}>{Icon.trash}</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ---------- card view ----------
function ProjectCards({ items, onEdit, onDelete, onDuplicate, onToggleFeature }){
  return (
    <div className="card-grid">
      {items.map(p => (
        <div key={p.id} className="pcard">
          <div className="ph" style={p.thumbnail ? {backgroundImage:`url(${p.thumbnail})`,backgroundSize:'cover',backgroundPosition:'center'} : {}}>
            {!p.thumbnail && <div className="lbl">[ {p.title.toUpperCase()} ]</div>}
            <div className="pin">
              {p.featured && <span className="pill" style={{color:'var(--fg)'}}>★ Featured</span>}
              <span className="pill" style={{
                color: p.status === 'Published' ? '#5ed681' : p.status === 'Draft' ? '#e1c876' : p.status === 'Scheduled' ? '#76c4e1' : '#888'
              }}>{p.status}</span>
            </div>
          </div>
          <div className="body">
            <div className="row1">
              <h3>{p.title}</h3>
              <span className="yr">{p.year}</span>
            </div>
            <div className="meta">{p.category} · {p.client}</div>
            <div className="meta" style={{color:'var(--fg-mute)'}}>{p.runtime} · {p.shots} shots · {p.director}</div>
          </div>
          <div className="footer">
            <div className="row-actions" style={{gap:6}}>
              <button className="icon-btn" onClick={() => onToggleFeature(p.id)} style={p.featured ? {borderColor:'var(--fg)',color:'var(--fg)'} : {}}>{Icon.star}</button>
              <button className="icon-btn" onClick={() => onDuplicate(p)}>{Icon.copy}</button>
              <button className="icon-btn danger" onClick={() => onDelete(p)}>{Icon.trash}</button>
            </div>
            <button className="filter-btn" style={{padding:'7px 12px',fontSize:'10px'}} onClick={() => onEdit(p)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------- drawer (edit/new) ----------
function blankProject(){
  return { id:null, title:'', client:'', category:'Brand Film', year: new Date().getFullYear(), runtime:'', status:'Draft', featured:false, director: DIRECTORS[0], vfx_sup: SUPES[0], shots:0, tags:[], summary:'', thumbnail:'', credit_type:'V01 Work', studio:'', role:'' };
}

function MediaTab({ draft, set }) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef(null);

  const upload = async (file) => {
    if (!file) return;
    setUploading(true);
    const ext = file.name.split('.').pop().toLowerCase();
    const path = `thumbnails/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;
    const { error } = await sb.storage.from('project-media').upload(path, file, { cacheControl: '31536000', upsert: false });
    if (error) {
      alert('Upload failed: ' + error.message);
      setUploading(false);
      return;
    }
    const { data: { publicUrl } } = sb.storage.from('project-media').getPublicUrl(path);
    set('thumbnail', publicUrl);
    setUploading(false);
  };

  const removeThumbnail = async () => {
    if (draft.thumbnail) {
      const match = draft.thumbnail.match(/project-media\/(.+)$/);
      if (match) await sb.storage.from('project-media').remove([match[1]]);
    }
    set('thumbnail', '');
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer?.files?.[0];
    if (file && file.type.startsWith('image/')) upload(file);
  };

  return (
    <>
      <div className="field">
        <label>Thumbnail <span className="hint">16:9 or 4:3 · JPG, PNG, WebP</span></label>
        {draft.thumbnail ? (
          <div style={{position:'relative'}}>
            <img src={draft.thumbnail} style={{width:'100%',aspectRatio:'16/9',objectFit:'cover',borderRadius:2,border:'1px solid var(--line)'}} />
            <button onClick={removeThumbnail} style={{position:'absolute',top:8,right:8,width:28,height:28,background:'rgba(0,0,0,0.7)',border:'1px solid var(--line)',color:'var(--fg)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:2,fontSize:16}} title="Remove">&times;</button>
          </div>
        ) : (
          <div
            className="upload"
            onClick={() => fileRef.current?.click()}
            onDragOver={e => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            style={dragOver ? {borderColor:'var(--fg)',background:'rgba(255,255,255,0.03)'} : {cursor:'pointer'}}
          >
            <div className="ph-mini">{uploading ? '[ UPLOADING… ]' : '[ DROP IMAGE HERE ]'}</div>
            <div className="text">{uploading ? 'Uploading to storage…' : 'Click to upload or drag in · JPG, PNG, WebP'}</div>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" style={{display:'none'}} onChange={e => upload(e.target.files?.[0])} />
      </div>
      <div className="field">
        <label>Hero URL <span className="hint">direct link or Supabase storage path</span></label>
        <input type="text" value={draft.hero_url || ''} onChange={e => set('hero_url', e.target.value)} placeholder="https://..." />
      </div>
      <div className="field">
        <label>Thumbnail URL <span className="hint">auto-filled on upload, or paste manually</span></label>
        <input type="text" value={draft.thumbnail || ''} onChange={e => set('thumbnail', e.target.value)} placeholder="https://..." />
      </div>
    </>
  );
}

function ProjectDrawer({ mode, item, onSave, onClose, onDelete, onDuplicate }){
  const [draft, setDraft] = useState({...item, tags: item.tags || []});
  const [tab, setTab]     = useState('details');
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const set = (k, v) => setDraft(d => ({...d, [k]: v}));
  const valid = draft.title.trim() && (draft.credit_type === 'Founder Prior Work' || draft.client.trim());

  const addTag = () => {
    const t = tagInput.trim().toLowerCase();
    if (t && !draft.tags.includes(t)) set('tags', [...draft.tags, t]);
    setTagInput('');
  };

  const handleSave = async () => {
    if (!valid || saving) return;
    setSaving(true);
    await onSave(draft);
    setSaving(false);
  };

  return (
    <>
      <div className="drawer-head">
        <div>
          <div className="sub">{mode === 'new' ? 'New Project' : 'Editing Project'}</div>
          <h2>{draft.title || 'Untitled Project'}</h2>
        </div>
        <button className="close" onClick={onClose} aria-label="Close drawer">{Icon.close}</button>
      </div>

      <div className="dtabs" style={{padding:'0 28px'}}>
        <button className={tab === 'details' ? 'on':''} onClick={() => setTab('details')}>Details</button>
        <button className={tab === 'media'   ? 'on':''} onClick={() => setTab('media')}>Media</button>
        <button className={tab === 'credits' ? 'on':''} onClick={() => setTab('credits')}>Credits</button>
        <button className={tab === 'publish' ? 'on':''} onClick={() => setTab('publish')}>Publish</button>
      </div>

      <div className="drawer-body">
        {tab === 'details' && (
          <>
            <div className="field">
              <label>Title<span className="req">*</span></label>
              <input type="text" value={draft.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Echoes of Tomorrow" autoFocus />
            </div>
            <div className="field">
              <label>Credit Type</label>
              <div className="seg">
                {['V01 Work','Founder Prior Work'].map(t => <button key={t} className={draft.credit_type === t ? 'on':''} onClick={() => set('credit_type', t)}>{t}</button>)}
              </div>
            </div>
            {draft.credit_type === 'Founder Prior Work' ? (
              <>
                <div className="field">
                  <label>Studio <span className="hint">VFX house where the work was done</span></label>
                  <input type="text" value={draft.studio || ''} onChange={e => set('studio', e.target.value)} placeholder="e.g. Framestore" />
                </div>
                <div className="field">
                  <label>Role</label>
                  <input type="text" value={draft.role || ''} onChange={e => set('role', e.target.value)} placeholder="e.g. Compositor" />
                </div>
              </>
            ) : (
              <div className="field">
                <label>Client<span className="req">*</span></label>
                <input type="text" value={draft.client} onChange={e => set('client', e.target.value)} placeholder="e.g. Atlas Pictures" />
              </div>
            )}
            <div className="field">
              <label>Category</label>
              <div className="seg">
                {CATEGORIES.map(c => <button key={c} className={draft.category === c ? 'on':''} onClick={() => set('category', c)}>{c}</button>)}
              </div>
            </div>
            <div className="field">
              <div className="row3">
                <div>
                  <label>Year</label>
                  <input type="number" value={draft.year} onChange={e => set('year', +e.target.value)} />
                </div>
                <div>
                  <label>Runtime</label>
                  <input type="text" value={draft.runtime} onChange={e => set('runtime', e.target.value)} placeholder="04:32" />
                </div>
                <div>
                  <label>Shots</label>
                  <input type="number" value={draft.shots} onChange={e => set('shots', +e.target.value)} />
                </div>
              </div>
            </div>
            <div className="field">
              <label>Summary <span className="hint">used on case study and grid hover</span></label>
              <textarea value={draft.summary} onChange={e => set('summary', e.target.value)} placeholder="Two sentences. The hook and the texture." />
            </div>
            <div className="field">
              <label>Tags</label>
              <div className="tag-input" onClick={(e) => e.currentTarget.querySelector('input').focus()}>
                {draft.tags.map(t => (
                  <span key={t} className="tg">{t}<span className="x" onClick={() => set('tags', draft.tags.filter(x => x !== t))}>×</span></span>
                ))}
                <input type="text" value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(); } else if (e.key === 'Backspace' && !tagInput && draft.tags.length) set('tags', draft.tags.slice(0,-1)); }}
                  placeholder={draft.tags.length ? '' : 'press enter to add'} />
              </div>
            </div>
          </>
        )}

        {tab === 'media' && (
          <MediaTab draft={draft} set={set} />
        )}

        {tab === 'credits' && (
          <>
            <div className="field">
              <label>Director</label>
              <select value={draft.director} onChange={e => set('director', e.target.value)}>
                {DIRECTORS.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="field">
              <label>VFX Supervisor</label>
              <select value={draft.vfx_sup} onChange={e => set('vfx_sup', e.target.value)}>
                {SUPES.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Producer</label>
              <input type="text" placeholder="Elliot Pace" />
            </div>
            <div className="field">
              <label>DOP</label>
              <input type="text" placeholder="Director of Photography" />
            </div>
            <div className="field">
              <label>Editor</label>
              <input type="text" placeholder="Lead Editor" />
            </div>
            <div className="field">
              <label>Sound Design</label>
              <input type="text" placeholder="Sound design lead" />
            </div>
          </>
        )}

        {tab === 'publish' && (
          <>
            <div className="field">
              <label>Status</label>
              <div className="seg">
                {STATUSES.map(s => <button key={s} className={draft.status === s ? 'on':''} onClick={() => set('status', s)}>{s}</button>)}
              </div>
            </div>
            <div className="field">
              <label>Visibility</label>
              <div className="toggle-row">
                <div className="meta">Featured on Home<span>Pinned to hero + selected work grid</span></div>
                <div className={'toggle ' + (draft.featured ? 'on':'')} onClick={() => set('featured', !draft.featured)}></div>
              </div>
              <div className="toggle-row">
                <div className="meta">Listed in Work archive<span>Shown in /work browse view</span></div>
                <div className="toggle on"></div>
              </div>
              <div className="toggle-row">
                <div className="meta">Allow press download<span>Generate stills + sizzle for press kit</span></div>
                <div className="toggle"></div>
              </div>
              <div className="toggle-row">
                <div className="meta">Show case study<span>Renders /case-study/{draft.id || 'new'}</span></div>
                <div className="toggle on"></div>
              </div>
            </div>

            {mode === 'edit' && (
              <div className="danger-zone">
                <h4>Danger Zone</h4>
                <p>Permanently remove this project from the site and database. This cannot be undone.</p>
                <button onClick={onDelete}>Delete Project</button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="drawer-foot">
        <div className="left">
          {mode === 'edit' && <button className="btn-sm" onClick={onDuplicate}>Duplicate</button>}
        </div>
        <div className="right">
          <button className="btn-sm" onClick={onClose}>Cancel</button>
          <button className="btn-sm primary" disabled={!valid || saving} style={(!valid || saving) ? {opacity:0.4,cursor:'not-allowed'} : {}} onClick={handleSave}>{saving ? 'Saving…' : mode === 'new' ? 'Create' : 'Save Changes'}</button>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
