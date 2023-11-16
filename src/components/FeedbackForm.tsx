import { ForwardRefRenderFunction, forwardRef, useState } from 'react'
import { Button, ButtonProps } from './Button'

interface FeedbackFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function FeedbackButton({
  children,
  emoji,
  ...props
}: ButtonProps & { emoji: string }) {
  return (
    <Button variant="outline" className="group !block" {...props}>
      <span className="flex items-center px-1">
        <span className="mr-2 grayscale group-hover:grayscale-0">{emoji}</span>
        {children}
      </span>
    </Button>
  )
}

const choices = [
  {
    value: 'yes',
    label: 'It was helpful',
    emoji: '🤩',
  },
  {
    value: 'no',
    label: 'It was not helpful',
    emoji: '😓',
  },
  {
    value: 'feedback',
    label: 'I have feedback',
    emoji: '📣',
  },
]

const FeedbackForm: ForwardRefRenderFunction<
  HTMLFormElement,
  FeedbackFormProps
> = (props, ref) => {
  const [choice, setChoice] = useState('')
  const { onSubmit } = props

  const selectedChoice = choices.find((c) => c.value === choice)

  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className="flex flex-col items-start justify-start gap-6"
    >
      <p className="text-sm text-zinc-900 dark:text-white">
        What did you think of this content?
      </p>
      {choice == '' && (
        <div className="flex flex-col gap-2 md:flex-row">
          {choices.map(({ label, value, emoji }) => (
            <FeedbackButton
              emoji={emoji}
              key={value}
              onClick={() => setChoice(value)}
            >
              {label}
            </FeedbackButton>
          ))}
        </div>
      )}
      {choice != '' && (
        <div className="flex w-full max-w-[400px] flex-col gap-4 rounded-lg p-2 text-gray-700 shadow-md ring-1 ring-gray-300 dark:bg-white/2.5 dark:text-gray-100 dark:ring-white/10 dark:hover:shadow-black/5">
          <div className="flex items-center">
            <span className="mr-2">{selectedChoice?.emoji}</span>
            {selectedChoice?.label}
          </div>
          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <div>
            <textarea
              rows={5}
              name="comment"
              id="comment"
              className="block w-full rounded-md border-0 bg-white p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-700/70 dark:text-gray-50 dark:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="We'd love to hear your feedback!"
              defaultValue={''}
              autoFocus
            />
          </div>
          <div className="mt-2 flex justify-end">
            <Button
              data-response={selectedChoice?.value}
              type="submit"
              variant="filled"
              className="bg-primary"
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </form>
  )
}

export default forwardRef(FeedbackForm)
