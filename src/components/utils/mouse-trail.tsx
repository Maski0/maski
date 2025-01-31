"use client"

import { useEffect, useRef } from "react"

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<{ x: number; y: number; alpha: number }[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      dotsRef.current.push({ x: e.clientX, y: e.clientY, alpha: 1 })
    }

    window.addEventListener("mousemove", onMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current = dotsRef.current.filter((dot) => dot.alpha > 0.1)
      dotsRef.current.forEach((dot) => {
        dot.alpha *= 0.95
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124, 58, 237, ${dot.alpha})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50" style={{ mixBlendMode: "screen" }} />
  )
}

