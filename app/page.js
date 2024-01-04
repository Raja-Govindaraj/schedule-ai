"use client";
import { useState } from "react";
import Image from "next/image";
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  "726031518310-anjarhb29357t2rik7c1kctia9s222b7.apps.googleusercontent.com", //YOUR_CLIENT_ID
  "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", //YOUR_CLIENT_SECRET
  // YOUR_REDIRECT_URL
); 

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/calendar.readonly'
];

export default function Home() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onHandleInstall = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsInstalled(true);
    }, [3000]);
    const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      // access_type: 'offline',
    
      // If you only need one scope you can pass it as a string
      scope: scopes
    });
    console.log("url", url);
  };

  return (
    <main className="flex flex-col p-24">
      <h2 className="text-emphasis hidden text-base font-semibold leading-none sm:block mb-4">
        All apps
      </h2>
      <div className="grid gap-3 grid-cols-3">
        <div className="col-span-1 border-[#f3f4f6] relative flex min-h-64 flex-col rounded-md border p-5 ">
          <div className="flex">
            <Image
              src="https://app.cal.com/app-store/googlecalendar/icon.svg"
              alt="Google Calendar Logo"
              width={48}
              height={48}
              className="mb-4 h-12 w-12 rounded-sm"
            />
          </div>
          <div className="flex items-center">
            <h3 className="text-emphasis font-medium">Google Calendar</h3>
          </div>
          <p className="text-default mt-2 flex-grow text-sm">
            Google Calendar is a time management and scheduling service
            developed by Google. Allows users to create and edit events, with
            options available for type and time. Available to anyone that has a
            Gmail account on both mobile and web versions.
          </p>
          <div className="mt-5 flex max-w-full flex-row justify-between gap-2">
            <a
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed text-emphasis border border-default bg-default hover:bg-[#f9fafb] hover:border-emphasis focus-visible:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-[#f3f4f6] disabled:bg-opacity-30 disabled:text-[#f9fafb] disabled:hover:bg-opacity-30 disabled:hover:text-[#f9fafb] disabled:hover:border-[#f3f4f6] disabled:hover:bg-default h-9 px-4 py-2.5 flex w-32 flex-grow justify-center"
              href="/apps/google-calendar"
              data-testid="app-store-app-card-google-calendar"
            >
              Details
            </a>
            <div className="[@media(max-width:260px)]:w-full">
              <button
                className="whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed text-black border border-default bg-default hover:bg-[#f9fafb] hover:border-emphasis focus-visible:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-[#f3f4f6] disabled:bg-opacity-30 disabled:bg-gray-300 disabled:text-emphasis disabled:hover:bg-default h-9 px-4 py-2.5 [@media(max-width:260px)]:w-full [@media(max-width:260px)]:justify-center"
                data-testid="install-app-button"
                type="button"
                onClick={() => onHandleInstall()}
                disabled={isLoading}
              >
                {isLoading && (
                  <div className="rounded-md text-center absolute left-0 top-0 bottom-0 right-0 bg-gray-600 bg-opacity-40">
                    <svg
                      aria-hidden="true"
                      className="w-full h-6 text-gray-200 animate-spin dark:text-gray-400 fill-gray-400 absolute top-1"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4 stroke-[1.5px] ltr:-ml-1 ltr:mr-2 rtl:-mr-1 rtl:ml-2"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
                Install
              </button>
            </div>
          </div>
          {isInstalled && (
            <div className="max-w-44 absolute right-0 mr-4 flex flex-wrap justify-end gap-1">
              <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-[#e4fbe9] text-[#285231] py-1 px-1.5 text-xs leading-3">
                Installed
              </div>
            </div>
          )}
        </div>

        <div className="col-span-1 border-[#f3f4f6] relative flex min-h-64 flex-col rounded-md border p-5">
          <div className="flex">
            <Image
              src="https://app.cal.com/app-store/applecalendar/icon.svg"
              alt="Apple Calendar Logo"
              width={48}
              height={48}
              className="mb-4 h-12 w-12 rounded-sm"
            />
          </div>
          <div className="flex items-center">
            <h3 className="text-emphasis font-medium">Apple Calendar</h3>
          </div>
          <p className="text-default mt-2 flex-grow text-sm">
            Apple calendar runs both the macOS and iOS mobile operating systems.
            Offering online cloud backup of calendars using Apple’s iCloud
            service, it can sync with Google Calendar and Microsoft Exchange
            Server. Users can schedule events in their day that include time,
            location, duration, and extra notes.
          </p>
          <div className="mt-5 flex max-w-full flex-row justify-between gap-2">
            <a
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed text-emphasis border border-default bg-default hover:bg-[#f9fafb] hover:border-emphasis focus-visible:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-[#f3f4f6] disabled:bg-opacity-30 disabled:text-[#f9fafb] disabled:hover:bg-opacity-30 disabled:hover:text-[#f9fafb] disabled:hover:border-[#f3f4f6] disabled:hover:bg-default h-9 px-4 py-2.5 flex w-32 flex-grow justify-center"
              href="/apps/google-calendar"
              data-testid="app-store-app-card-google-calendar"
            >
              Details
            </a>
            <div className="[@media(max-width:260px)]:w-full">
              <button
                className="whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed text-emphasis border border-default bg-default hover:bg-[#f9fafb] hover:border-emphasis focus-visible:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-[#f3f4f6] disabled:bg-opacity-30 disabled:text-[#f9fafb] disabled:hover:bg-opacity-30 disabled:hover:text-[#f9fafb] disabled:hover:border-[#f3f4f6] disabled:hover:bg-default h-9 px-4 py-2.5 [@media(max-width:260px)]:w-full [@media(max-width:260px)]:justify-center"
                data-testid="install-app-button"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4 stroke-[1.5px] ltr:-ml-1 ltr:mr-2 rtl:-mr-1 rtl:ml-2"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
                Install
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-[#f3f4f6] relative flex min-h-64 flex-col rounded-md border p-5">
          <div className="flex">
            <Image
              src="https://app.cal.com/app-store/office365calendar/icon.svg"
              alt="Outlook Calendar Logo"
              width={48}
              height={48}
              className="mb-4 h-12 w-12 rounded-sm"
            />
          </div>
          <div className="flex items-center">
            <h3 className="text-emphasis font-medium">Outlook Calendar</h3>
          </div>
          <p className="text-default mt-2 flex-grow text-sm">
            Microsoft Office 365 is a suite of apps that helps you stay
            connected with others and get things done. It includes but is not
            limited to Microsoft Word, PowerPoint, Excel, Teams, OneNote and
            OneDrive. Office 365 allows you to work remotely with others on a
            team and collaborate in an online environment. Both web versions and
            desktop/mobile applications are available.
          </p>
          <div className="mt-5 flex max-w-full flex-row justify-between gap-2">
            <a
              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed text-emphasis border border-default bg-default hover:bg-[#f9fafb] hover:border-emphasis focus-visible:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-[#f3f4f6] disabled:bg-opacity-30 disabled:text-[#f9fafb] disabled:hover:bg-opacity-30 disabled:hover:text-[#f9fafb] disabled:hover:border-[#f3f4f6] disabled:hover:bg-default h-9 px-4 py-2.5 flex w-32 flex-grow justify-center"
              href="/apps/google-calendar"
              data-testid="app-store-app-card-google-calendar"
            >
              Details
            </a>
            <div className="[@media(max-width:260px)]:w-full">
              <button
                className="whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed text-emphasis border border-default bg-default hover:bg-[#f9fafb] hover:border-emphasis focus-visible:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-[#f3f4f6] disabled:bg-opacity-30 disabled:text-[#f9fafb] disabled:hover:bg-opacity-30 disabled:hover:text-[#f9fafb] disabled:hover:border-[#f3f4f6] disabled:hover:bg-default h-9 px-4 py-2.5 [@media(max-width:260px)]:w-full [@media(max-width:260px)]:justify-center"
                data-testid="install-app-button"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4 stroke-[1.5px] ltr:-ml-1 ltr:mr-2 rtl:-mr-1 rtl:ml-2"
                >
                  <line x1="12" x2="12" y1="5" y2="19"></line>
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                </svg>
                Install
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
