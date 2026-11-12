// The admin still uses the previous site's typefaces. They are loaded here so
// public pages do not download them.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
      />
      {children}
    </>
  );
}
