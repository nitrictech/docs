import { ForwardRefRenderFunction, forwardRef } from 'react'

interface FeedbackFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function FeedbackButton(props) {
  return (
    <button
      type="submit"
      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-gray-800/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      {...props}
    />
  )
}

const FeedbackForm: ForwardRefRenderFunction<
  HTMLFormElement,
  FeedbackFormProps
> = (props, ref) => {
  const { onSubmit } = props

  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className="absolute inset-0 flex items-center justify-center gap-6 md:justify-start"
    >
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Was this page helpful?
      </p>
      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
        <FeedbackButton data-response="yes">Yes</FeedbackButton>
        <div className="bg-gray-800/10 dark:bg-white/10" />
        <FeedbackButton data-response="no">No</FeedbackButton>
      </div>
    </form>
  )
}

export default forwardRef(FeedbackForm)
