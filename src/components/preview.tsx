import { useEffect, useRef } from 'react';
interface PreviewProps {
  code: string;
  bundlingStatus: string;
}

const html = `
    <html>
      <head>
        <style>html { background-color: white; }</style>
      </head>
      <body>
        <div id="root"></div>
        <script>
        const handleError = (err) => {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
              console.error(err);
        };
          window.addEventListener('error', (event) => {
           handleError(event.error);
        });
      
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview = (prop: PreviewProps) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(prop.code, '*');
    }, 50);

  }, [prop.code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {prop.bundlingStatus && <div className='preview-error'>{prop.bundlingStatus}</div>}
    </div>
  );
};
export default Preview;