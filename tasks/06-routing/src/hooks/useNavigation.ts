import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const fetchCourses = () => ["course-1", "course-2", "course-3", "course-4"];

interface NavigationState {
  from?: string;
  data?: {
    key?: string,
    prefetch?: boolean,
  };
}
export function useSmartNavigation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack, setCanGoBack] = useState<boolean>(false);

  useEffect(() => {
    setCanGoBack(location.pathname !== "/");
  }, [location.pathname]);

  const hasPermission = (key: string) => {
    //check token?
    const accessKey = "22";

    return key === accessKey;
  };

  const smartNavigate = (to: string, options?: { state?: NavigationState }) => {
    if (options?.state?.data) {
      const { key, prefetch } = options.state.data;

      if (key && !hasPermission(key)) return;
      //navigate("/sign-in")

      if (prefetch) {
        queryClient.prefetchQuery({
          queryKey: ["courses"],
          queryFn: fetchCourses,
        });
      }

      navigate(to as string);
    } else {
      navigate(to as string);
    }
  };

  const goBack = () => {
    if (!canGoBack) {
      return;
    }

    navigate(-1);
  };

  return {
    navigate: smartNavigate,
    goBack,
    canGoBack,
  };
}
