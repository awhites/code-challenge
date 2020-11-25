import React from "react";
import { render } from "@testing-library/react";
import { ProfileCard } from "./pages/ProfilePage/components/ProfileCard";

// test('renders learn react link', () => {

const userProfile = {
  name: "Alex White",
  experience: [
    {
      field: "React Development",
      years: 4,
    },
    {
      field: "Music Production",
      years: 3,
    },
  ],
  attributes: [
    {
      name: "Team Work",
      content: "I am good at working in a team",
    },
    {
      name: "Duty",
      content: "Sense of duty",
    },
    {
      name: "Love to learn",
      content: "take on new challenges",
    },
  ],
  profileUrl:
    "https://previews.dropbox.com/p/orig/AA-ZiZjsnt1RZ0VBeVx_JsRnS9bZbCqVHwXp1gdwoYtCTgubNf5XHkAQzZaDhHeS9YWaeus4-4pGdB_xkiKkXr9KQHNJmlhRL4_OqF_5kooaaUwTJigenwZhLzeY9VsGSEKFZ35sh6ZYo3ymUDBpO5o2RAj0m-4h9SIT6k-lz-nBXmbUMSuuK03a7CeCbweT4KpChh9ZlI4ZBRfLb0uQ007hVCShXotE2aYRpWB-txM8ruxInR3c3tT1b9jFYg5kX59wNxrDPiJGCcThuegpNVsCX_zD766E392KYhiI0pscj8VnE3EX5iG9m_0aAEuQEt2f138aIsfxjLsPh-1a4swe/p.svg?fv_content=true&size_mode=5",
};

test("profile card renders correct number of ExperienceFields", () => {
  // Arrange
  const expectedFields = 2;

  // Act
  const { queryAllByTestId } = render(
    <ProfileCard
      name={userProfile.name}
      experience={userProfile.experience}
      attributes={userProfile.attributes}
      profileUrl={userProfile.profileUrl}
    />
  );

  // Assert
  expect(queryAllByTestId("experience").length).toEqual(expectedFields);
});

test("profile card displays experience Field ", () => {
  // Arrange
  const field = userProfile.experience[0].field;

  // Act
  const { getByText } = render(
    <ProfileCard
      name={userProfile.name}
      experience={userProfile.experience}
      attributes={userProfile.attributes}
      profileUrl={userProfile.profileUrl}
    />
  );

  // Assert
  expect(getByText(field)).toBeTruthy();
});

test("profile card renders correct number of AttributeFields", () => {
  // Arrange
  const expectedFields = 3;

  // Act
  const { queryAllByTestId } = render(
    <ProfileCard
      name={userProfile.name}
      experience={userProfile.experience}
      attributes={userProfile.attributes}
      profileUrl={userProfile.profileUrl}
    />
  );

  // Assert
  expect(queryAllByTestId("attribute").length).toEqual(expectedFields);
});

test("profile card displays attribute Field ", () => {
  // Arrange
  const field = userProfile.attributes[0].name;
  const content = userProfile.attributes[0].content;

  // Act
  const { getByText } = render(
    <ProfileCard
      name={userProfile.name}
      experience={userProfile.experience}
      attributes={userProfile.attributes}
      profileUrl={userProfile.profileUrl}
    />
  );

  // Assert
  expect(getByText(field)).toBeTruthy();
  expect(getByText(content)).toBeTruthy();
});
