import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsTitleText extends Schema.Component {
  collectionName: 'components_components_title_texts';
  info: {
    displayName: 'titleText';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ComponentsTeamMember extends Schema.Component {
  collectionName: 'components_components_team_members';
  info: {
    displayName: 'teamMember';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ComponentsPlansFeatures extends Schema.Component {
  collectionName: 'components_components_plans_features';
  info: {
    displayName: 'plansFeatures';
  };
  attributes: {
    text: Attribute.String;
    available: Attribute.Boolean;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    opacity: Attribute.Integer;
  };
}

export interface ComponentsNumberTitleText extends Schema.Component {
  collectionName: 'components_components_number_title_texts';
  info: {
    displayName: 'numberTitleText';
    description: '';
  };
  attributes: {
    number: Attribute.Integer;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ComponentsIconTitleText extends Schema.Component {
  collectionName: 'components_components_icon_title_texts';
  info: {
    displayName: 'iconTitleText';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ComponentsIconNumberTitleText extends Schema.Component {
  collectionName: 'components_components_icon_number_title_texts';
  info: {
    displayName: 'iconNumberTitleText';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    number: Attribute.Integer;
    title: Attribute.String;
    text: Attribute.String;
  };
}

export interface ComponentsCounter extends Schema.Component {
  collectionName: 'components_components_counters';
  info: {
    displayName: 'counter';
    description: '';
  };
  attributes: {
    number: Attribute.Decimal;
    suffix: Attribute.String;
    category: Attribute.String;
    text: Attribute.Text;
    purpleText: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComponentsAuthor extends Schema.Component {
  collectionName: 'components_components_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.title-text': ComponentsTitleText;
      'components.team-member': ComponentsTeamMember;
      'components.plans-features': ComponentsPlansFeatures;
      'components.number-title-text': ComponentsNumberTitleText;
      'components.icon-title-text': ComponentsIconTitleText;
      'components.icon-number-title-text': ComponentsIconNumberTitleText;
      'components.counter': ComponentsCounter;
      'components.author': ComponentsAuthor;
    }
  }
}
