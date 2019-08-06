import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const FollowersCard = ({follower}) => (
  <Card>
    <Image src={follower.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{follower.login}</Card.Header>
      <Card.Meta>
        <span className='date'>Join at {follower.created_at}</span>
      </Card.Meta>
      <Card.Description>
        Team Lead
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button >
        <Icon name='user' />
        {follower.followers}
      </Button>
    </Card.Content>
  </Card>
)

export default FollowersCard