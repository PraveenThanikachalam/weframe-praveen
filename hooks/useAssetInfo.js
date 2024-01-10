import { useEffect, useState } from 'react';


const useAssetInfo = (url) => {
  const [assetInfo, setAssetInfo] = useState({ type: 'other' });

  useEffect(() => {
    const fetchAssetInfo = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('Content-Type');

        let type = 'other';
        if (contentType) {
          if (contentType.startsWith('image/')) {
            type = 'image';
          } else if (contentType.startsWith('video/')) {
            type = 'video';
          }
        }

        setAssetInfo({ type });
      } catch (error) {
        setAssetInfo({ type: 'other', error: error.message });
      }
    };

    fetchAssetInfo();
  }, [url]);

  return assetInfo;
};

export default useAssetInfo;
