import { ImageResponse } from 'next/server'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

const font = fetch(new URL('../../assets/Sora-Bold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export default async function handler(req: NextRequest) {
  try {
    const fontData = await font
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Nitric Docs'

    const hasDescription = searchParams.has('description')

    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : 'Docs for the Nitric cloud application framework.'

    const imageBaseUrl = req.headers.get('host')?.startsWith('localhost')
      ? `http://${req.headers.get('host')}`
      : `https://${req.headers.get('host')}`

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#121118',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Nitric" src={`${imageBaseUrl}/docs/images/open_graph.png`} />
          </div>
          <div
            style={{
              width: '500px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              left: '79px',
              top: '230px',
              bottom: '156px',
              position: 'absolute',
              color: 'white',
              fontSize: '50px',
              fontFamily: 'Sora',
              lineHeight: '120%',
              fontWeight: 700,
              textAlign: 'left',
            }}
          >
            {title}
            <div
              style={{
                color: '#A1A1AA',
                fontSize: '26px',
                fontWeight: 500,
              }}
            >
              {description}
            </div>
          </div>
          <br />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Sora',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
