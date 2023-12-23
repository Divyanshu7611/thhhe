'use client'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Preloader() {
  const [loaded, setLoaded] = useState<boolean>(false)
  const pathname = usePathname()

  useLayoutEffect(() => {
    setLoaded(false)
    console.log('layout')
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 500)

    console.log('normal')
  }, [pathname])

  return (
    <>
      {!loaded && (
        <div className={`h-screen w-screen fixed inset-0 flex items-center justify-center  bg-gray-900 z-[9999]`}>
          <svg
            width="801"
            height="165"
            viewBox="0 0 801 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="preloader"
          >
            <path d="M179.048 8.74337L146.873 41.148C146.511 41.4996 146.082 41.681 145.586 41.6923L118.457 41.7094C117.723 41.7094 117.35 42.0779 117.339 42.815L117.237 48.5475L117.491 135.215C117.492 135.344 117.455 135.469 117.384 135.576C117.314 135.684 117.213 135.767 117.095 135.816C116.977 135.866 116.846 135.879 116.721 135.853C116.596 135.828 116.481 135.766 116.391 135.674L75.46 94.5094C74.8861 93.9324 74.4319 93.246 74.1238 92.4897C73.8156 91.7334 73.6597 90.9224 73.6649 90.1037L73.9697 50.2315L73.9189 42.9851C73.9076 42.3047 73.5633 41.9645 72.8859 41.9645L3.65785 41.8284C3.22884 41.8965 2.79419 41.8511 2.35389 41.6923C1.90231 41.5336 1.67651 41.2104 1.67651 40.7228L1.69345 1.27584C1.69345 1.16306 1.73805 1.05489 1.81745 0.975141C1.89684 0.89539 2.00453 0.850586 2.11681 0.850586H185.839C186.46 0.850586 186.55 1.07172 186.11 1.51399L179.048 8.74337Z" />
            <path d="M195.254 92.7913L195.271 1.3609C195.271 1.22555 195.325 1.09575 195.42 1.00005C195.515 0.904351 195.645 0.850586 195.779 0.850586H238.556C238.691 0.850586 238.82 0.904351 238.915 1.00005C239.01 1.09575 239.064 1.22555 239.064 1.3609L238.844 135.079C238.846 135.18 238.817 135.28 238.763 135.365C238.708 135.45 238.63 135.517 238.537 135.557C238.444 135.598 238.342 135.609 238.243 135.591C238.143 135.572 238.052 135.524 237.98 135.453L195.407 93.1655C195.357 93.1169 195.318 93.0586 195.292 92.9942C195.266 92.9299 195.253 92.8608 195.254 92.7913Z" />
            <path d="M371.779 1.00363L383.193 12.4346C383.298 12.5375 383.359 12.6781 383.362 12.8258L383.684 40.9268C383.685 41.0377 383.654 41.1463 383.593 41.2392C383.533 41.332 383.447 41.4049 383.345 41.4485C383.244 41.4922 383.132 41.5047 383.023 41.4845C382.915 41.4643 382.815 41.4123 382.736 41.3351L343.448 1.82012C343.372 1.74169 343.32 1.64268 343.3 1.53527C343.279 1.42785 343.29 1.31671 343.331 1.21551C343.373 1.11431 343.443 1.02746 343.533 0.965643C343.622 0.903823 343.728 0.869727 343.837 0.867545L371.373 0.833525C371.448 0.832755 371.523 0.847436 371.593 0.876676C371.663 0.905916 371.726 0.949107 371.779 1.00363Z" />
            <path d="M548.626 51.2181L548.592 42.5769C548.592 41.9872 548.298 41.6923 547.711 41.6923L448.611 41.9475C447.956 41.9475 447.392 41.7093 446.917 41.2331L413.54 7.41657L407.816 1.58203C407.33 1.0944 407.432 0.850586 408.121 0.850586L590.437 0.884607C590.949 0.884607 591.44 1.08891 591.802 1.45258C592.164 1.81624 592.367 2.30948 592.367 2.82378L592.418 135.691C592.418 136.746 592.051 136.899 591.318 136.151L549.218 93.5738C548.85 93.2027 548.643 92.7073 548.643 92.196L548.626 51.2181Z" />
            <path d="M799.493 93.0465L751.653 92.8593C750.897 92.8593 750.784 93.1258 751.314 93.6588L757.106 99.5614L799.408 142.223C799.995 142.802 799.871 143.108 799.036 143.142L794.379 143.261L743.66 143.21C743.095 143.199 742.555 142.967 742.153 142.563L693.432 93.5227C693.137 93.2258 692.787 92.9903 692.404 92.8297C692.02 92.6692 691.61 92.5868 691.197 92.5872L664.22 92.6212H658.48C656.955 92.6099 656.735 92.0655 657.819 90.9882L698.97 49.7382C699.136 49.5709 699.335 49.4382 699.556 49.3477C699.777 49.2572 700.015 49.2107 700.257 49.2109L755.768 48.7686C756.57 48.7573 756.97 48.349 756.97 47.5439V43.4614C756.97 42.8037 756.643 42.4748 755.988 42.4748L735.498 42.2877L657.04 41.6583C656.453 41.6583 655.951 41.4485 655.533 41.0289L623.815 9.10059L616.499 1.63306C616.002 1.11141 616.11 0.850586 616.821 0.850586L799.442 0.867596C799.806 0.867596 800.155 1.01455 800.412 1.27614C800.669 1.53772 800.814 1.89251 800.814 2.26244L801 92.247C801 92.4487 800.923 92.6428 800.784 92.7886C800.645 92.9344 800.456 93.0207 800.255 93.0294L799.493 93.0465Z" />
            <path d="M383.549 144.639C368.545 143.641 354.009 143.544 339.942 144.349L339.925 96.7716L339.959 93.6077C339.971 93.0067 339.677 92.7062 339.079 92.7062L254.305 92.6041L247.328 92.451C246.605 92.4397 246.504 92.1789 247.023 91.6685L288.326 50.1804C288.658 49.8411 289.054 49.5716 289.49 49.3876C289.926 49.2036 290.394 49.1088 290.866 49.1088L338.994 49.1258C339.626 49.1258 339.942 48.8082 339.942 48.1732L340.078 6.87215C340.089 6.04431 340.388 5.91957 340.975 6.49792C354.444 19.6979 367.709 33.0397 380.771 46.5232C384.175 50.0273 383.599 51.9155 383.616 56.5593C383.673 85.5902 383.65 114.95 383.549 144.639Z" />
            <path d="M445.85 49.3639L498.5 49.4659L540.412 91.6005C540.977 92.1675 540.864 92.4567 540.074 92.468L533.249 92.6041L448.628 92.6891C447.973 92.6891 447.646 93.018 447.646 93.6757L447.629 102.215L447.696 143.21C447.696 143.512 447.575 143.802 447.359 144.016C447.143 144.229 446.85 144.349 446.545 144.349L404.7 144.128C404.124 144.128 403.836 143.845 403.836 143.278L403.972 50.2144C403.972 49.9527 404.075 49.7018 404.259 49.5168C404.443 49.3317 404.693 49.2278 404.954 49.2278L445.85 49.3639Z" />
            <path d="M612.57 92.553L612.807 49.8061C612.807 49.6076 612.886 49.4172 613.026 49.2768C613.165 49.1365 613.355 49.0576 613.552 49.0576L655.381 49.2107C655.478 49.2107 655.575 49.2301 655.666 49.2677C655.756 49.3053 655.838 49.3604 655.907 49.4299C655.977 49.4994 656.031 49.5819 656.069 49.6727C656.106 49.7636 656.126 49.8609 656.126 49.9592L656.498 135.334C656.501 135.485 656.458 135.633 656.375 135.759C656.293 135.886 656.174 135.984 656.035 136.041C655.895 136.098 655.742 136.111 655.595 136.079C655.448 136.047 655.314 135.971 655.211 135.861L612.79 93.0803C612.65 92.9407 612.571 92.7511 612.57 92.553Z" />
            <path d="M105.993 161.139L77.6106 132.595L74.7148 129.397C74.2903 128.938 74.0544 128.337 74.0544 127.713L73.8342 100.344C73.8346 100.269 73.8572 100.196 73.8992 100.134C73.9413 100.072 74.0007 100.025 74.07 99.9973C74.1393 99.9699 74.2151 99.9639 74.2878 99.9801C74.3605 99.9964 74.4266 100.034 74.4777 100.089L116.17 141.9C116.876 142.619 117.272 143.584 117.271 144.588L117.254 161.938C117.254 162.38 117.04 162.658 116.611 162.772C112.569 163.86 109.03 163.316 105.993 161.139Z" />
            <path d="M227.87 161.615L199.352 133.225L195.762 128.819C195.369 128.337 195.159 127.734 195.17 127.118L195.525 100.752C195.537 99.8335 195.864 99.6975 196.507 100.344L238.217 142.717C238.635 143.136 238.844 143.641 238.844 144.23L238.81 161.581C238.81 162.193 238.516 162.579 237.929 162.738C234.396 163.77 231.042 163.395 227.87 161.615Z" />
            <path d="M577.16 157.856L552.876 133.786L549.151 129.261C548.823 128.853 548.66 128.388 548.66 127.866V100.803C548.66 100.077 548.919 99.9695 549.439 100.48C563.144 113.918 576.731 127.458 590.2 141.1C593.621 144.554 592.418 157.294 592.113 162.142C592.08 162.743 591.769 163.1 591.182 163.214C585.605 164.348 580.931 162.562 577.16 157.856Z" />
            <path d="M636.736 153.229C629.098 145.183 620.902 137.681 613.366 129.431C612.948 128.966 612.74 128.428 612.74 127.815V100.854C612.74 99.9695 613.05 99.8391 613.671 100.463L654.873 141.73C655.324 142.183 655.682 142.72 655.926 143.309C656.17 143.899 656.295 144.53 656.295 145.166L656.363 162.227C656.374 162.715 656.143 163.038 655.668 163.197C647.201 165.97 642.646 159.455 636.736 153.229Z" />
          </svg>
        </div>
      )}
    </>
  )
}