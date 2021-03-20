import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import DotIcon from '../SvgIcons/DotIcon';
import PinkButton from '../Buttons/PinkButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useEffect} from 'react';
const ListCard = ({
  imageUrl,
  imageAspectRatio,
  title,
  description,
  buttonText,
  buttonOnPress,
  subText,
  onDeletePress,
  onCardPress,
}) => {
  const RBSHEET_HEIGHT = 100;
  const RBSHEET_OPEN_DURATION = 250;
  const RBSHEET_RADIUS = 45;
  const RBSHEET_MAIN_VIEW_RADIUS = 45;

  const PINK_BAR_WIDTH = 45;
  const PINK_BAR_RADIUS = 45;
  const PINK_BAR_HEIGHT = 4;

  const SEPERATOR_WIDTH = '80%';
  const SEPERATOR_OPACITY = 0.5;

  const BUTTON_GAP = 30;

  let myRbSheet = null;
  const [isVisibleRBSheet, setIsVisibleRBSheet] = React.useState(false);
  const [pressedButton, setPressedButton] = React.useState('');

  useEffect(() => {
    if (myRbSheet && isVisibleRBSheet) {
      myRbSheet.open();
    } else if (!myRbSheet && !isVisibleRBSheet && pressedButton === 'delete') {
      onDeletePress && onDeletePress();
    }
  }, [isVisibleRBSheet]);

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
            <TouchableOpacity onPress={() => setIsVisibleRBSheet(true)}>
              <DotIcon />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}} />
        </View>
        <TouchableOpacity
          onPress={onCardPress}
          style={{
            flex: 14,
            alignItems: 'center',
            paddingTop: layout.padding.medium,
          }}>
          <View
            style={{
              height: layout.autoImageSizes.large,
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
                alignSelf: 'flex-start',
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
        </TouchableOpacity>
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
        {isVisibleRBSheet && (
          <RBSheet
            ref={(ref) => {
              myRbSheet = ref;
            }}
            onClose={() => setIsVisibleRBSheet(false)}
            onOpen={() => setPressedButton('')}
            height={RBSHEET_HEIGHT}
            openDuration={RBSHEET_OPEN_DURATION}
            customStyles={{
              container: {
                backgroundColor: colors.themeColors.primary,
                borderTopLeftRadius: RBSHEET_RADIUS,
                borderTopRightRadius: RBSHEET_RADIUS,
              },
            }}>
            <View
              style={{
                height: RBSHEET_HEIGHT,
                borderTopLeftRadius: RBSHEET_MAIN_VIEW_RADIUS,
                borderTopRightRadius: RBSHEET_MAIN_VIEW_RADIUS,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{paddingTop: layout.padding.xxxLarge}}
                onPress={() => {
                  setPressedButton('delete');
                  myRbSheet.close();
                }}>
                <Text
                  style={{
                    color: colors.themeColors.pink,
                    fontFamily: layout.fonts.nunito,
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
        )}
      </View>
    </View>
  );
};

export default ListCard;
