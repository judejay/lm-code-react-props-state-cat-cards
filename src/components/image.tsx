import React from "react";
import PropTypes from "prop-types";

interface ImageProps {
  url: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}

const Image: React.FC<ImageProps> = ({
  url,
  altText,
  licenceType,
  licenceUrl,
  attributionName,
  attributionUrl,
}) => {
  return (
    <>
      <img src={url} alt={altText} width="100%" />

      <p className="card__text__small">
        Image licenced under <a href={licenceUrl}>{licenceType}</a>
        {attributionName && (
          <>
            &nbsp;by <a href={attributionUrl}>{attributionName}</a>
          </>
        )}
      </p>
    </>
  );
};

export default Image;
