import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Results = () => {
  const { resultImage, image } = useContext(AppContext);

  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Your Results are Ready!
        </h1>

        {/* Results Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Original Image */}
          {image && (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={URL.createObjectURL(image)}
                alt="Original"
                className="w-full max-h-96 object-contain"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-700">
                  Original Image
                </h3>
              </div>
            </div>
          )}

          {/* Processed Image */}
          {resultImage ? (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={resultImage}
                alt="Processed"
                className="w-full max-h-96 object-contain"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-700">
                  Background Removed
                </h3>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-inner rounded-lg flex items-center justify-center h-64 text-gray-400 text-lg">
              {image ? 'Processing Image...' : 'No image uploaded.'}
            </div>
          )}
        </div>

        {/* Download Button */}
        {resultImage && (
          <div className="mt-8">
            <a
              href={resultImage}
              download="background-removed.png"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Processed Image
            </a>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-6 text-gray-500">
          <p>
            Feel free to download or share the results. If you need further
            assistance, let us know!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
