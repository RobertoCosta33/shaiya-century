import App, { AppContext, AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { NextIntlClientProvider } from "next-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "styles/global";
import theme from "styles/theme";
import { LoadingProvider } from "providers/LoadingProvider";
import { AuthProvider } from "providers/AuthProvider";
import { ResponsiveProvider } from "providers/ResponsiveProvider";
import LoadingSpinner from "components/SimpleComponents/LoadingSpinner";
import { useAuth } from "providers/AuthProvider";

type AppContentProps = {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
};

const AppContent = ({ Component, pageProps }: AppContentProps) => {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return <Component {...pageProps} />;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale || "pt-BR"}
      messages={pageProps.messages}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LoadingProvider>
          <AuthProvider>
            <ResponsiveProvider>
              <AppContent Component={Component} pageProps={pageProps} />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
              />
            </ResponsiveProvider>
          </AuthProvider>
        </LoadingProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const locale = appContext.ctx.locale || "pt-BR";
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      messages,
    },
  };
};

export default MyApp;
