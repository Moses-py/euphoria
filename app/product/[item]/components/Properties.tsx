interface PropertiesProps {
  fabric?: Fabric;
  pattern?: Pattern;
  fit?: Fit;
  neck?: Neck;
  sleeve?: Sleeve;
  style?: Style;
}
const Properties = ({
  fabric,
  pattern,
  fit,
  neck,
  sleeve,
  style,
}: PropertiesProps) => {
  return (
    <>
      <div className="bg-light rounded-xl grid grid-cols-2 md:grid-cols-3 p-8 font-sans">
        <div className="divide-x-2">
          <p className="text-lg text-gray-1 font-light my-2">Fabric</p>
          <p className="text-lg text-primary font-semibold font-sans my-2">
            {fabric}
          </p>
        </div>
        <div className="divide-x-2">
          <p className="text-lg text-gray-1 font-light my-2">Pattern</p>
          <p className="text-lg text-primary font-semibold font-sans my-2">
            {pattern}
          </p>
        </div>
        <div className="divide-x-2">
          <p className="text-lg text-gray-1 font-light my-2">Fit</p>
          <p className="text-lg text-primary font-semibold font-sans my-2">
            {fit}
          </p>
        </div>
        <div className="divide-x-2">
          <p className="text-lg text-gray-1 font-light my-2">Neck</p>
          <p className="text-lg text-primary font-semibold font-sans my-2">
            {neck}
          </p>
        </div>
        <div className="divide-x-2">
          <p className="text-lg text-gray-1 font-light my-2">Sleeve</p>
          <p className="text-lg text-primary font-semibold font-sans my-2">
            {sleeve}
          </p>
        </div>
        <div className="divide-x-2">
          <p className="text-lg text-gray-1 font-light my-2">Style</p>
          <p className="text-lg text-primary font-semibold font-sans my-2">
            {style}
          </p>
        </div>
      </div>
    </>
  );
};

export default Properties;
