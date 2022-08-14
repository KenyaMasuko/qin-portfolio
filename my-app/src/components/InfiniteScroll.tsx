import React, { FC, useEffect, useState } from "react"
import { useIntersection } from "@mantine/hooks"
import { Center, Loader, Transition } from "@mantine/core"

type InfiniteScrollProp = {
  loadMoreData: () => Promise<{ moreDataYet: boolean }>
}

export const InfiniteScroll: FC<InfiniteScrollProp> = ({ loadMoreData }) => {
  const { ref, entry } = useIntersection({
    threshold: 1,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [moreDataYet, setMoreDataYet] = useState(true)

  useEffect(() => {
    const fn = async () => {
      if (!entry?.isIntersecting) {
        return
      }

      setIsLoading(true)
      const result = await loadMoreData()
      setIsLoading(false)

      if (!result.moreDataYet) {
        setMoreDataYet(false)
      }
    }
    fn().then()
  }, [entry, loadMoreData])

  return (
    <Center>
      <Transition transition="fade" mounted={isLoading} duration={2000}>
        {(styles) => (
          <Loader
            style={{ ...styles }}
            className={`mt-10`}
            m={"auto"}
            color="red.5"
          />
        )}
      </Transition>
      <div
        ref={ref}
        className={`${isLoading || !moreDataYet ? "hidden" : "block"}`}
      ></div>
    </Center>
  )
}
