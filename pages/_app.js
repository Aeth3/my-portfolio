import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import AnimatedCursor from "react-animated-cursor"

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',

      ]}
    />
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
