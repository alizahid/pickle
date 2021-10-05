import React, { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { IconName } from '@pickle/types/components'

type Props = {
  className?: string
  name: IconName
  size?: number
}

export const Icon: FunctionComponent<Props> = ({
  className,
  name,
  size = 24
}) => (
  <svg
    className={className}
    fill="currentColor"
    height={size}
    viewBox="0 0 24 24"
    width={size}>
    {icons[name]}
  </svg>
)

type ExpandIconProps = {
  className?: string
  open?: boolean
  size?: number
}

export const ExpandIcon: FunctionComponent<ExpandIconProps> = ({
  className,
  open,
  size = 24
}) => (
  <svg
    className={twMerge(
      'transform transition-transform',
      className,
      open && 'rotate-180'
    )}
    fill="currentColor"
    height={size}
    viewBox="0 0 48 48"
    width={size}>
    <path d="M 43.486328 11.978516 A 1.50015 1.50015 0 0 0 42.439453 12.439453 L 24 30.878906 L 5.5605469 12.439453 A 1.50015 1.50015 0 0 0 4.484375 11.984375 A 1.50015 1.50015 0 0 0 3.4394531 14.560547 L 22.939453 34.060547 A 1.50015 1.50015 0 0 0 25.060547 34.060547 L 44.560547 14.560547 A 1.50015 1.50015 0 0 0 43.486328 11.978516 z" />
  </svg>
)

type MenuIconProps = {
  className?: string
  open?: boolean
  size?: number
}

export const MenuIcon: FunctionComponent<MenuIconProps> = ({
  className,
  open,
  size = 24
}) => (
  <svg
    className={className}
    fill="currentColor"
    height={size}
    viewBox="0 0 48 48"
    width={size}>
    {open ? (
      <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" />
    ) : (
      <path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z" />
    )}
  </svg>
)

export const icons = {
  add: (
    <>
      <circle cx="12" cy="12" opacity=".35" r="10" />
      <path d="M17,11h-3c-0.552,0-1-0.448-1-1V7c0-0.552-0.448-1-1-1s-1,0.448-1,1v3c0,0.552-0.448,1-1,1H7c-0.552,0-1,0.448-1,1	s0.448,1,1,1h3c0.552,0,1,0.448,1,1v3c0,0.552,0.448,1,1,1s1-0.448,1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1-0.448,1-1	S17.552,11,17,11z" />
    </>
  ),
  calendar: (
    <>
      <path
        d="M18,21H6c-1.657,0-3-1.343-3-3V6h18v12C21,19.657,19.657,21,18,21z"
        opacity=".35"
      />
      <path d="M18,3H6C4.343,3,3,4.343,3,6v1h18V6C21,4.343,19.657,3,18,3z" />
      <circle cx="14" cy="18" r="1" />
      <circle cx="10" cy="18" r="1" />
      <circle cx="6" cy="18" r="1" />
      <circle cx="8" cy="12" r="3" />
      <circle cx="18" cy="14" r="1" />
      <circle cx="18" cy="10" r="1" />
      <circle cx="14" cy="10" r="1" />
      <circle cx="14" cy="14" r="1" />
    </>
  ),
  chart: (
    <>
      <circle cx="12" cy="12" opacity=".35" r="10" />
      <path d="M14.806,9.77l7.361-2.103c0.613-0.175,0.918-0.878,0.613-1.438c-0.875-1.609-2.178-2.949-3.758-3.869	c-0.502-0.292-1.15-0.102-1.41,0.418L14.375,9.25C14.231,9.537,14.498,9.858,14.806,9.77z" />
      <path d="M12,11V2C6.383,2,1.847,6.632,2.004,12.284c0.145,5.218,4.495,9.568,9.713,9.712C17.369,22.152,22,17.617,22,12h-9	C12.448,12,12,11.552,12,11z" />
    </>
  ),
  close: (
    <>
      <circle cx="12" cy="12" opacity=".35" r="10" />
      <path d="M14.8,16.2l-7-7c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0l7,7c0.4,0.4,0.4,1,0,1.4l0,0C15.8,16.6,15.2,16.6,14.8,16.2z" />
      <path d="M7.8,14.8l7-7c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4l-7,7c-0.4,0.4-1,0.4-1.4,0l0,0C7.4,15.8,7.4,15.2,7.8,14.8z" />
    </>
  ),
  crown: (
    <>
      <rect height="4" width="14" x="5" y="16" />
      <path
        d="M14.708,7.791L12,4L9.292,7.791c-0.556,0.778-1.57,1.077-2.459,0.725L3,7l1,11h16l1-11l-3.833,1.517	C16.278,8.868,15.264,8.569,14.708,7.791z"
        opacity=".35"
      />
      <circle cx="12" cy="4" r="2" />
      <circle cx="21" cy="7" r="2" />
      <circle cx="3" cy="7" r="2" />
      <circle cx="19" cy="18" r="2" />
      <circle cx="5" cy="18" r="2" />
    </>
  ),
  devices: (
    <>
      <path d="M13,18c0,0-10.324,0-10.5,0C1.672,18,1,18.672,1,19.5S1.672,21,2.5,21C2.676,21,13,21,13,21V18z" />
      <path d="M20,7h-6c-1.657,0-3,1.343-3,3v9c0,1.657,1.343,3,3,3h1.459C14.653,22,14,21.347,14,20.541v-7.082	C14,12.653,14.653,12,15.459,12h3.082C19.347,12,20,12.653,20,13.459v7.082C20,21.347,19.347,22,18.541,22H20c1.657,0,3-1.343,3-3	v-9C23,8.343,21.657,7,20,7z" />
      <path d="M17.5,20c-0.079,0-0.893,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5c0.107,0,0.921,0,1,0	c0.276,0,0.5-0.224,0.5-0.5C18,20.224,17.776,20,17.5,20z" />
      <path
        d="M22,7c0-1.657-1.343-3-3-3H5C3.343,4,2,5.343,2,7v8c0,1.657,1.343,3,3,3h8	v2c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2v-2h1V7z"
        opacity=".35"
      />
    </>
  ),
  error: (
    <>
      <path
        d="M21.734,18.025L13.718,4.14C13.364,3.526,12.708,3.148,12,3.148s-1.364,0.378-1.718,0.992	L2.266,18.025c-0.354,0.614-0.354,1.369,0,1.984C2.62,20.622,3.275,21,3.984,21h16.033c0.708,0,1.364-0.378,1.718-0.992	C22.089,19.394,22.089,18.639,21.734,18.025z"
        opacity=".35"
      />
      <path d="M13.179,17.746c0,0.353-0.205,1.254-1.185,1.254s-1.173-0.902-1.173-1.254c0-0.345,0.218-1.269,1.173-1.269	S13.179,17.401,13.179,17.746z M10.919,13.919V9.568c0-0.597,0.484-1.081,1.081-1.081h0c0.597,0,1.081,0.484,1.081,1.081v4.352	C13.081,14.516,12.597,15,12,15h0C11.403,15,10.919,14.516,10.919,13.919z" />
    </>
  ),
  exit: (
    <>
      <path d="M16,7a2,2,0,1,0-2-2A2,2,0,0,0,16,7Z" />
      <path
        d="M16.551,11.878l.029.033L14.327,10.7l-.893,1.55L15.8,15.4a1,1,0,0,1,.2.6v4a1,1,0,0,1-2,0l-.5-3.5-2.293-2.293-2.5,2.5A1,1,0,0,1,8,17H5v2a3,3,0,0,0,3,3h9a3,3,0,0,0,3-3V12H17A.983.983,0,0,1,16.551,11.878Z"
        opacity=".35"
      />
      <path
        d="M17,2H8A3,3,0,0,0,5,5v6a1,1,0,0,1,.293-.707l3-3A1,1,0,0,1,9,7h4a1.986,1.986,0,0,1,1.221.427.993.993,0,0,1,.111.06L17.361,10H20V5A3,3,0,0,0,17,2ZM16,7a2,2,0,1,1,2-2A2,2,0,0,1,16,7Z"
        opacity=".35"
      />
      <path
        d="M7.427,14.584l1.608-2.24A1.877,1.877,0,0,1,9.276,11l-.007,0,1-1.725L9.416,9h0L6.707,11.707A1,1,0,0,1,5,11v3.879Z"
        opacity=".35"
      />
      <path d="M20,12V10H17.361L14.333,7.487a.993.993,0,0,0-.111-.06A1.986,1.986,0,0,0,13,7H9a1,1,0,0,0-.707.293l-3,3a1,1,0,1,0,1.414,1.414L9.414,9h0l.849.275L9.269,11l.007,0a1.877,1.877,0,0,0-.241,1.341l-1.608,2.24L4.012,15H4a1,1,0,1,0,0,2H8a1,1,0,0,0,.707-.293l2.5-2.5L13.5,16.5,14,20a1,1,0,0,0,2,0V16a1,1,0,0,0-.2-.6l-2.366-3.154.893-1.55,2.253,1.215-.029-.033A.983.983,0,0,0,17,12Z" />
    </>
  ),
  group: (
    <>
      <circle cx="7.5" cy="6.5" opacity=".35" r="3.5" />
      <circle cx="16.5" cy="6.5" opacity=".35" r="3.5" />
      <path d="M18.5,14c-0.164,0-12.836,0-13,0C3.567,14,2,15.567,2,17.5C2,19.433,3.567,21,5.5,21c0.164,0,12.836,0,13,0	c1.933,0,3.5-1.567,3.5-3.5C22,15.567,20.433,14,18.5,14z" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" opacity=".35" r="10" />
      <path d="M11,17v-5c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h0C11.448,18,11,17.552,11,17z" />
      <circle cx="12" cy="7.5" r="1.5" />
    </>
  ),
  key: (
    <>
      <path
        d="M14.5,2C10.358,2,7,5.358,7,9.5c0,4.142,3.358,7.5,7.5,7.5S22,13.642,22,9.5	C22,5.358,18.642,2,14.5,2z M17,9c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C19,8.105,18.105,9,17,9z"
        opacity=".35"
      />
      <path d="M7.587,12.413l-5.294,5.294C2.105,17.895,2,18.149,2,18.414V21c0,0.552,0.448,1,1,1h2.586c0.265,0,0.52-0.105,0.707-0.293	l1.293-1.293C7.851,20.149,8,19.789,8,19.414C8,18.633,8.633,18,9.414,18c0.375,0,0.735-0.149,1-0.414l1.173-1.173	C9.787,15.654,8.346,14.212,7.587,12.413z" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="12" opacity=".35" r="10" />
      <circle cx="12" cy="9" r="3" />
      <path d="M17.883,15.784C17.574,14.755,16.63,14,15.5,14h-7c-1.13,0-2.074,0.755-2.383,1.784C7.362,17.717,9.529,19,12,19	S16.638,17.717,17.883,15.784z" />
    </>
  ),
  settings: (
    <>
      <path
        d="M16,18.928c0.678-0.391,1.459-0.424,2.135-0.164c0.564,0.217,1.209,0.037,1.592-0.43	c0.683-0.833,1.234-1.778,1.621-2.805c0.221-0.587,0.012-1.232-0.467-1.638C20.342,13.437,20,12.761,20,12	c0-0.761,0.342-1.437,0.88-1.893c0.479-0.406,0.689-1.05,0.467-1.638c-0.387-1.026-0.937-1.972-1.621-2.805	c-0.383-0.467-1.028-0.647-1.592-0.43C17.459,5.496,16.678,5.463,16,5.072c-0.68-0.393-1.1-1.056-1.21-1.775	c-0.09-0.588-0.556-1.058-1.143-1.158C13.111,2.048,12.561,2,12,2s-1.111,0.048-1.647,0.139C9.766,2.239,9.301,2.709,9.21,3.297	C9.1,4.016,8.68,4.679,8,5.072C7.322,5.463,6.541,5.496,5.865,5.235c-0.564-0.217-1.209-0.037-1.592,0.43	C3.59,6.498,3.04,7.443,2.653,8.47C2.431,9.057,2.641,9.702,3.12,10.107C3.658,10.563,4,11.239,4,12c0,0.761-0.342,1.437-0.88,1.893	c-0.479,0.406-0.689,1.05-0.467,1.638c0.387,1.026,0.937,1.972,1.621,2.805c0.383,0.467,1.028,0.647,1.592,0.43	C6.541,18.504,7.322,18.537,8,18.928c0.68,0.393,1.1,1.056,1.21,1.775c0.09,0.588,0.556,1.058,1.143,1.158	C10.889,21.952,11.439,22,12,22s1.111-0.048,1.647-0.139c0.587-0.099,1.053-0.569,1.143-1.158C14.9,19.984,15.32,19.321,16,18.928z"
        opacity=".35"
      />
      <path d="M12,8c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S14.209,8,12,8z" />
    </>
  ),
  success: (
    <>
      <circle cx="12" cy="12" opacity=".35" r="10" />
      <path d="M11,16c-0.256,0-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L11,13.586l4.293-4.293	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-5,5C11.512,15.902,11.256,16,11,16z" />
    </>
  ),
  team: (
    <>
      <circle cx="7.5" cy="6.5" opacity=".35" r="3.5" />
      <circle cx="16.5" cy="6.5" opacity=".35" r="3.5" />
      <path
        d="M10.5,14h8c1.93,0,3.5,1.57,3.5,3.5S20.43,21,18.5,21h-8V14z"
        opacity=".35"
      />
      <path d="M14,17.5c0,1.93-1.57,3.5-3.5,3.5h-5c-0.96,0-1.84-0.39-2.47-1.03C2.39,19.34,2,18.46,2,17.5C2,15.57,3.57,14,5.5,14h5	c0.96,0,1.84,0.39,2.47,1.03C13.61,15.66,14,16.54,14,17.5z" />
    </>
  ),
  trash: (
    <>
      <path
        d="M15.352,22H8.648c-1.513,0-2.789-1.127-2.977-2.628L4,6h16l-1.672,13.372	C18.141,20.873,16.865,22,15.352,22z"
        opacity=".35"
      />
      <path d="M16,4H8V3c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V4z" />
      <path d="M19,3C18.399,3,5.601,3,5,3C3.895,3,3,3.895,3,5c0,1.105,0.895,2,2,2c0.601,0,13.399,0,14,0c1.105,0,2-0.895,2-2	C21,3.895,20.105,3,19,3z" />
    </>
  )
}
