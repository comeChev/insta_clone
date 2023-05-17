"use client";
import React from "react";
import { RecoilRoot } from "recoil";

export function RecoilContext({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
