import React from 'react';
import {View, Text, Image} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import DotIcon from '../SvgIcons/DotIcon';
import PinkButton from '../Buttons/PinkButton';
const ListCard = ({
  imageUrl,
  imageAspectRatio,
  title,
  description,
  buttonText,
  buttonOnPress,
  subText,
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.themeColors.primary,
          height: layout.card.height,
          width: layout.card.width,
          borderRadius: layout.cardBoaderRadius,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          <View style={{flex: 6, alignItems: 'flex-end'}}>
            <DotIcon />
          </View>
          <View style={{flex: 1}} />
        </View>
        <View
          style={{
            flex: 14,
            alignItems: 'center',
            paddingTop: layout.padding.medium,
          }}>
          <View
            style={{
              width: '70%',
              aspectRatio: imageAspectRatio,
            }}>
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
              }}
              source={imageUrl}
              resizeMode="stretch"
            />
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
              paddingHorizontal: layout.padding.screenHorizontal,
            }}>
            <Text
              style={{
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.pink,
                fontSize: layout.fontSizes.header,
              }}>
              {title}
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              width: '100%',
              paddingHorizontal: layout.padding.screenHorizontal,
              alignItems: 'center',
            }}>
            <Text
              numberOfLines={6}
              style={{
                fontFamily: layout.fonts.nunito,
                color: colors.themeColors.secondary,
                fontSize: layout.fontSizes.xsmall,
              }}>
              {description}
            </Text>
            <View
              style={{position: 'absolute', borderColor: 'red', bottom: -10}}>
              <PinkButton onPress={buttonOnPress} text={buttonText} />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: layout.padding.xxxxLarge,
        }}>
        <Text
          style={{
            fontSize: layout.fontSizes.subText,
            fontFamily: layout.fonts.nunitoLight,
          }}>
          will be achived by
        </Text>
        <Text
          style={{
            fontSize: layout.fontSizes.xsmall,
            fontFamily: layout.fonts.nunito,
          }}>
          {subText}
        </Text>
      </View>
    </View>
  );
};

export default ListCard;
