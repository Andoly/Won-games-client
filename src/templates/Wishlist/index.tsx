import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

// import * as S from './styles'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist