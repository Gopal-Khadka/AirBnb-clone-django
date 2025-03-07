// import { theme } from "@chakra-ui/react";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: "false",
// };

// const theme = extendTheme({ config });
// export default theme;

import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        airbnb: {
          500: { value: "#ff385c" },
        },
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
