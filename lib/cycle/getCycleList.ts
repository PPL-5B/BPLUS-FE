'use server'

import { CycleList } from "@/types/cycle";
import { cookies } from "next/headers";

export async function getCycleList(): Promise<CycleList> {
  const accessToken = cookies().get("accessToken")?.value
  const API_URL = `${process.env.API_BASE_URL}/api/cycle/list`
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      next: { tags: ['cycles'] }
    })
    const data = await response.json()
    return response.ok ? data : { active: [], past: [], future: [], stopped: [] }
  } catch (err) {
    console.log(err)
    return {
      active: [], past: [], future: [], stopped: []
    }
  }
}

// test
