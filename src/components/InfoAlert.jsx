import { InformationCircleIcon } from '@heroicons/react/20/solid'

export function InfoAlert({ children }) {
  return (
    <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className="h-6 w-6 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div className="mx-4 flex-1 md:flex md:justify-between">
          <p className="text-md my-0 text-gray-900">{children}</p>
        </div>
      </div>
    </div>
  )
}
