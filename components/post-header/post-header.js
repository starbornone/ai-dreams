import { format } from 'date-fns'

import { CoverImage, PostTitle } from 'components'

export function PostHeader({ coverImage, date, tags, title }) {
    return (
        <>
            {coverImage && (
                <div className="-mx-5 mb-8 sm:mx-0 md:mb-12">
                    <CoverImage title={title} url={coverImage.url} />
                </div>
            )}
            {(tags || date) && (
                <div className="mx-auto mb-6 flex max-w-3xl justify-between">
                    {tags && (
                        <div className="flex gap-8 font-light text-text-500">
                            {tags.map((tag) => (
                                <div key={tag}>{tag}</div>
                            ))}
                        </div>
                    )}
                    {date && (
                        <div className="font-light text-text-500">
                            {format(new Date(date), 'dd MMMM yyyy')}
                        </div>
                    )}
                </div>
            )}
            <PostTitle>{title}</PostTitle>
        </>
    )
}
