import * as React from "react";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Caption,
} from "react-native-paper";
import moment from "moment";

const Cards = props => {
  return (
    <Card>
      <Card.Cover source={{ uri: props.urlToImage }} />
      {/* <List.Item
        title="Card Title"
        subtitle="Card Subtitle"
        description="Item description"
        //left={props => <Avatar.Icon {...props} icon="folder" />}
      /> */}

      <Card.Content>
        <Caption>
          {moment(props.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </Caption>
        <Title>{props.title}</Title>
        <Caption>
          {props.source.name} - {props.author}
        </Caption>
        <Paragraph>{props.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate("News", { uri: props.url })}
        >
          Read more
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default Cards;
