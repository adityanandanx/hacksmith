"use server";

import { OutputType } from "@/components/single-code/types";
import {
  generateGithubWebsite,
  getGenerationFromGithub,
  getMultipleGeneration,
  getSingleGeneration,
} from "./api";
import { GetSingleGenerationResponse } from "./types";

export const getSingleGenerationAction = async (
  code: string,
  type: OutputType
): Promise<GetSingleGenerationResponse> => {
  const data = await getSingleGeneration(code, type);
  return data;
};

export const getMultipleGenerationAction = async (
  files: File[],
  type: OutputType
): Promise<Blob> => {
  const data = await getMultipleGeneration(files, type);
  return data;
};

export const getGenerationFromGithubAction = async (
  url: string,
  type: OutputType
) => {
  const data = await getGenerationFromGithub(url, type);
  return data;
};

export const generateGithubWebsiteAction = async (
  site_name: string,
  repo_url: string,
  port: string
) => {
  const data = await generateGithubWebsite(site_name, repo_url, port);
  return data;
};
