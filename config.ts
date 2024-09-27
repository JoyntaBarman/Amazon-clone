interface Config {
  baseUrl: string;
}

const checkConfig = (env: string): Config | {} => {
  let config: Config | {} = {};
  switch (env) {
    case "production":
      config = {
        baseUrl: "https://amazon-clone-three-chi-61.vercel.app/",
      };
      break;
    case "local":
      {
        config = {
          baseUrl: "http://localhost:3000/",
        };
      }
      break;
  }

  return config;
};

const selectServer = 'production'
export const config = checkConfig(selectServer) as Config;
