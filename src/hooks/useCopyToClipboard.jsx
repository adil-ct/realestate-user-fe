import { useState } from 'react'

function useCopyToClipboard(beforeCopyText, afterCopyText){
  const [copiedText, setCopiedText] = useState(null)
  const [tooltipText, setTooltipText] = useState(beforeCopyText ?? "Copy");

  // Fallback for non-secure contexts (e.g. plain HTTP servers) where
  // navigator.clipboard is unavailable. Uses a hidden textarea + execCommand.
  const legacyCopy = text => {
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      // Keep it out of view and prevent scroll/zoom jumps.
      textArea.style.position = 'fixed'
      textArea.style.top = '-9999px'
      textArea.style.left = '-9999px'
      textArea.setAttribute('readonly', '')
      document.body.appendChild(textArea)
      textArea.select()
      textArea.setSelectionRange(0, text.length)
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      return successful
    } catch (error) {
      console.warn('Legacy copy failed', error)
      return false
    }
  }

  const copy = async text => {
    const onSuccess = () => {
      setCopiedText(text)
      setTooltipText(afterCopyText ?? "Copied!")
      setTimeout(()=>{
        setTooltipText(beforeCopyText ?? "Copy")
      },5000)
    }

    const onFailure = () => {
      setCopiedText(null)
      setTooltipText(beforeCopyText ?? "Copy")
    }

    // Preferred path: async Clipboard API (requires a secure context).
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text)
        onSuccess()
        return true
      } catch (error) {
        console.warn('Clipboard API copy failed, trying fallback', error)
      }
    }

    // Fallback path: works over plain HTTP.
    if (legacyCopy(text)) {
      onSuccess()
      return true
    }

    console.warn('Copy not supported')
    onFailure()
    return false
  }

  return {copiedText, copy, tooltipText}
}

export default useCopyToClipboard
