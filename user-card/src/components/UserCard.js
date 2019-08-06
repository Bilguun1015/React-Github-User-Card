import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const UserCard = ({users}) => (
  <Card>
    <Image src={users.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{users.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Join at {users.created_at}</span>
      </Card.Meta>
      <Card.Description>
        Hey hey
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button >
        <Icon name='user' />
        {users.followers}
      </Button>
    </Card.Content>
  </Card>
)

export default UserCard