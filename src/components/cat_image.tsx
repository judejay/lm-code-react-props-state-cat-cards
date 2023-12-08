import React from "react";
import PropTypes from "prop-types";

interface CatImageProps {
  url: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}

const CatImage: React.FC<CatImageProps> = ({
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

export default CatImage;
