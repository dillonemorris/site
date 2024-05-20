import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

export const ButtonContrast = ({ isDescriptionShown = true }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg bg-zinc-50">
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-center py-8 pb-4">
          <button className="rounded-lg bg-blue-100 py-2 px-6 text-blue-900">
            Submit
          </button>
        </div>
        {isDescriptionShown ? (
          <div className="text-md flex items-center justify-center pb-4 text-sm text-green-600">
            <CheckCircleIcon className="mr-2 h-4 w-4" />
            <p className="m-0">
              Passes with a contrast ratio of{' '}
              <span className="font-bold">8.4</span>
            </p>
          </div>
        ) : null}
      </div>

      <div className="flex w-full flex-col">
        <div className="flex items-center justify-center py-8 pb-4">
          <button className="rounded-lg bg-blue-100 py-2 px-6 text-blue-600">
            Submit
          </button>
        </div>
        {isDescriptionShown ? (
          <div className="text-md flex items-center justify-center pb-4 text-sm text-red-600">
            <XCircleIcon className="mr-2 h-4 w-4" />
            <p className="m-0">
              Fails with a contrast ratio of{' '}
              <span className="font-bold">3.32</span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
