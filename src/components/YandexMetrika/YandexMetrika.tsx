"use client";

import Router from "next/router";
import React, { useCallback, useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

type Props = {};

const YM_COUNTER_ID = 99990144;

const YandexMetrika: React.FC<Props> = ({}) => {
  const hit = useCallback((url: string) => {
    ym("hit", url);
  }, []);

  useEffect(() => {
    hit(window.location.pathname + window.location.search);
    Router.events.on("routeChangeComplete", (url: string) => hit(url));
  }, [hit]);

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};

export default YandexMetrika;
