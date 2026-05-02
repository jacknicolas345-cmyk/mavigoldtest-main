export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Mavi Gold Gallery Clone</p>
        <p>طراحی شده برای تمرین و توسعه</p>
      </div>
    </footer>
  );
}
