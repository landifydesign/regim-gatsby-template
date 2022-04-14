import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import FeatureItem from "./featureItem";

const Features = () => {
  const data = useStaticQuery(graphql`
    {
      allFeaturesJson {
        nodes {
          id
          title
          description
          icon {
            publicURL
          }
        }
      }
      thumbnail: file(relativePath: { eq: "video-thumbnail.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 768
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-8 text-center">
            <div className="xl:col-span-2 xl:block hidden"></div>
            <div className="xl:col-span-8 flex flex-col gap-12 justify-center">
              <div className="flex flex-col gap-2 text-center">
                <h3 className="lg:text-display-xl md:text-display-lg text-display-md font-semibold">
                  All-in-one Event Platform
                </h3>
                <p className="md:text-body-lg text-body-md font-normal text-neutral-700">
                  Deliver an exceptional event experience
                </p>
              </div>
              <div className="flex flex-col items-center relative">
                <GatsbyImage
                  image={getImage(data.thumbnail)}
                  alt="Thumbnail"
                  className="relative rounded-md"
                />
                <div className="flex flex-row items-center md:py-4 py-3 md:pl-4 pl-3 md:pr-5 pr-4 gap-3 bg-white shadow-md rounded-full absolute md:-bottom-7 -bottom-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-6 md:h-6 w-5 h-5">
                    <path
                      d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24Z"
                      fill="#6B7280"
                      className="fill-neutral-500"
                    />
                    <path
                      d="M10 17L16 12L10 7V17Z"
                      fill="#6B7280"
                      className="fill-neutral-500"
                    />
                  </svg>
                  <span className="md:text-body-md text-body-sm font-medium">
                    See it in action (2 min)
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 xl:block hidden"></div>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-0 md:pt-10 md:pb-6 items-center">
            {data.allFeaturesJson.nodes.map((node) => (
              <FeatureItem
                icon={node.icon.publicURL}
                title={node.title}
                description={node.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
