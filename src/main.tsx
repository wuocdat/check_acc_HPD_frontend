import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider
            theme={{
                components: {
                    Button: {
                        defaultProps: {
                            size: "xs",
                        },
                    },
                    Text: {
                        defaultProps: {
                            size: "xs",
                        },
                    },
                },
                primaryColor: "orange",
            }}
            withNormalizeCSS
        >
            <App />
        </MantineProvider>
    </React.StrictMode>
);
