import Image from "next/image";

const pages = [
  {
    title: "An introduction about the blog",
    href: "/pages/about",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Glossary of common terms",
    href: "/pages/terms",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Best and most popular content",
    href: "/pages/recommended",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
];

export default function MorePages() {
  return (
    <div className="relative mb-20">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-16 lg:grid-cols-2 lg:max-w-none">
          {pages.map((page) => (
            <div key={page.title} className="flex flex-col overflow-hidden">
              <a href={page.href}>
                <div className="flex-shrink-0">
                  <Image
                    alt={page.title}
                    className="h-48 w-full object-cover"
                    src={page.imageUrl}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <p className="mt-3 text-base text-gray-500">{page.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
