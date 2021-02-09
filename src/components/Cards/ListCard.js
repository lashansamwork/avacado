import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import layout from '../../theme/layout';
import colors from '../../theme/colors';
import DotIcon from '../SvgIcons/DotIcon';
import PinkButton from '../Buttons/PinkButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import TaskDeleteModal from '../../components/Modals/TaskDeleteModal';
const ListCard = ({
  imageUrl,
  imageAspectRatio,
  title,
  description,
  buttonText,
  buttonOnPress,
  subText,
}) => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [showBottomSheetButtons, setShowBottomSheetButtons] = React.useState(
    true,
  );
  const MODAL_OFFSET = 0;
  let myRbSheet = null;

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
            <TouchableOpacity onPress={() => myRbSheet.open()}>
              <DotIcon />
            </TouchableOpacity>
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

        <RBSheet
          ref={(ref) => {
            myRbSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              backgroundColor: colors.themeColors.primary,
              flex: 0.3,
              flexDirection: 'column',
              alignItems: 'center',
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
              opacity: showBottomSheetButtons,
            },
          }}>
          {/* MAIN VIEW */}
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
            }}>
            {/* PINK BAR */}
            <View
              style={{
                width: 45,
                borderRadius: 45,
                margin: layout.padding.medium,
                backgroundColor: colors.themeColors.pink,
                height: 4,
              }}
            />
            {/* BTN 1 */}
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{flexBasis: 30}} />
              <TouchableOpacity onPress={() => myRbSheet.close()}>
                <Text
                  style={{
                    color: colors.themeColors.pink,
                    fontFamily: layout.fonts.nunito,
                  }}>
                  Archived
                </Text>
              </TouchableOpacity>
            </View>
            {/* SEPARATOR */}
            <View
              style={{
                height: layout.heights.seperatorHeight,
                width: '80%',
                backgroundColor: 'black',
                opacity: 0.5,
              }}
            />
            {/* BTN 2 DELETE */}
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  setDeleteModal(true);
                  setShowBottomSheetButtons(false);
                }}>
                <Text
                  style={{
                    color: colors.themeColors.pink,
                    fontFamily: layout.fonts.nunito,
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
              <View style={{flexBasis: 30}} />
            </View>
          </View>
          <View style={{opacity: 1}}>
            {/* MODAL */}
            <Modal visible={deleteModal} transparent={true}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: colors.themeColors.transparentLight,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  transparent={true}
                  onPressOut={() => {
                    setDeleteModal(false);
                    myRbSheet.close();
                  }}>
                  <View style={{flexBasis: MODAL_OFFSET}} />
                  <TouchableWithoutFeedback touchSoundDisabled>
                    <View>
                      <TaskDeleteModal
                        onDeletePress={() => {
                          setShowBottomSheetButtons(true);
                          setDeleteModal(false);
                          myRbSheet.close();
                        }}
                        onCancelPress={() => {
                          setShowBottomSheetButtons(true);
                          setDeleteModal(false);
                          myRbSheet.close();
                        }}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

export default ListCard;
