import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Inetgrations = () => {
  const data = useStaticQuery(graphql`
    {
      integrations: allFile(
        filter: { relativeDirectory: { eq: "integration-logos" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto xl:pb-40 pb-12">
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-8 gap-10 xl:py-18 md:py-12 pt-12 pb-6 xl:px-0 md:px-12 px-0 items-center border-t border-neutral-200 relative">
          <div className="absolute xl:block flex justify-center xl:left-8 inset-x-0 top-0">
            <svg
              width="760"
              height="380"
              viewBox="0 0 760 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[624px] md:h-[312px] w-[304px] h-[152px]">
              <g clip-path="url(#clip0_2554_770)">
                <circle
                  cx="380"
                  r="380"
                  fill="#CFFAFE"
                  className="fill-secondary-100"
                />
              </g>
              <defs>
                <clipPath id="clip0_2554_770">
                  <rect width="760" height="380" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col gap-4 relative xl:text-left text-center">
            <h3 className="lg:text-display-xl md:text-display-lg text-display-md font-semibold">
              Integrate with your favorite tools
            </h3>
            <p className="md:text-body-lg text-body-md font-normal text-neutral-700">
              Connect RegiM with your most favorite sales and marketing tools
            </p>
          </div>
          <div className="flex flex-row flex-wrap xl:gap-18 lg:gap-12 md:gap-18 gap-8 items-center justify-center justify-items-center relative">
            {data.integrations.edges.map(({ node }) => (
              <img
                src={node.publicURL}
                alt={node.name}
                key={node.id}
                className="shadow-xl rounded-full md:w-20 md:h-20 w-14 h-14"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inetgrations;
