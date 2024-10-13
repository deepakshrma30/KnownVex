"use client"

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export default function ProviderQuery({ children }:{children:ReactNode}) {
    const [queryClient] = useState(() => new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // default: true
        },
      },
    }));
  
    return (
      <QueryClientProvider client={queryClient}>
        
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
  }