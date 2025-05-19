"use client"

import type React from "react"

// Adapted from shadcn/ui (https://ui.shadcn.com/docs/components/toast)
import { useState, useEffect, useCallback } from "react"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 5000

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const dismiss = useCallback((toastId?: string) => {
    setToasts((toasts) => {
      if (toastId) {
        return toasts.filter((toast) => toast.id !== toastId)
      }
      return []
    })
  }, [])

  const toast = useCallback(
    ({ ...props }: Omit<ToastProps, "id">) => {
      const id = genId()

      const newToast = {
        id,
        ...props,
      }

      setToasts((toasts) => {
        const updatedToasts = [newToast, ...toasts].slice(0, TOAST_LIMIT)
        return updatedToasts
      })

      const timeout = setTimeout(() => {
        dismiss(id)
        toastTimeouts.delete(id)
      }, TOAST_REMOVE_DELAY)

      toastTimeouts.set(id, timeout)

      return id
    },
    [dismiss],
  )

  useEffect(() => {
    return () => {
      for (const timeout of toastTimeouts.values()) {
        clearTimeout(timeout)
      }
    }
  }, [])

  return {
    toast,
    dismiss,
    toasts,
  }
}
