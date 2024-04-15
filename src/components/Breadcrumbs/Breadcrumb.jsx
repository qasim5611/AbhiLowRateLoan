import Link from "next/link";
const Breadcrumb = ({ pageName }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol
          className="flex items-center gap-2"
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
          }}
        >
          <li>
            <Link className="font-medium" href="/adminPanel">
              Dashboard /&nbsp;
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
