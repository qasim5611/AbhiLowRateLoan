"use client";
import Image from "next/image";
import Grid from "@mui/material/Grid";

const brandData = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  if (typeof window === "undefined") {
    return null; // Or return some loading or fallback component if needed
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <Grid container>
          <Grid item xs={1}>
            &nbsp;
          </Grid>
          <Grid item xs={2}>
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </Grid>
          <Grid item xs={2}>
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </Grid>
          <Grid item xs={2}>
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </Grid>
          <Grid item xs={1}>
            &nbsp;
          </Grid>
        </Grid>

        {brandData.map((brand, key) => (
          <Grid
            container
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <Grid item xs={1}>
              &nbsp;
            </Grid>
            <Grid
              item
              xs={2}
              style={{ textAlign: "center" }}
              className="flex items-center gap-3 p-2.5 xl:p-5"
            >
              <div className="flex-shrink-0" style={{ textAlign: "center" }}>
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p
                className="hidden text-black dark:text-white sm:block"
                style={{ textAlign: "center" }}
              >
                {brand.name}
              </p>
            </Grid>

            <Grid
              item
              xs={2}
              style={{ textAlign: "center" }}
              className="flex items-center justify-center p-2.5 xl:p-5"
            >
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </Grid>

            <Grid
              item
              xs={2}
              style={{ textAlign: "center" }}
              className="flex items-center justify-center p-2.5 xl:p-5"
            >
              <p className="text-meta-3">${brand.revenues}</p>
            </Grid>

            <Grid
              item
              xs={2}
              style={{ textAlign: "center" }}
              className="hidden items-center justify-center p-2.5 sm:flex xl:p-5"
            >
              <p className="text-black dark:text-white">{brand.sales}</p>
            </Grid>

            <Grid item xs={2} style={{ textAlign: "center" }}>
              <p className="text-meta-5">{brand.conversion}%</p>
            </Grid>
            <Grid item xs={1}>
              &nbsp;
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
