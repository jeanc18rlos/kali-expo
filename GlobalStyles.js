import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const CenterStyles = theme =>
  StyleSheet.create({
    Center: {
      style: { alignItems: 'center', justifyContent: 'center' },
      props: {},
    },
  });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { style: { height: 100, width: 100 }, props: {} } });

export const H3Styles = theme =>
  StyleSheet.create({
    H3: {
      style: {
        color: theme.colors.strong,
        fontSize: 18.72,
        fontWeight: 'bold',
      },
      props: {},
    },
  });

export const H1Styles = theme =>
  StyleSheet.create({
    H1: {
      style: { color: theme.colors.strong, fontSize: 32, fontWeight: 'bold' },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    BODY: {
      style: {
        color: 'rgb(0, 0, 0)',
        fontFamily: 'Raleway_300Light',
        fontSize: 16,
        textAlign: 'center',
        typography: theme.typography.body1,
      },
      props: {},
    },
    'BODY-SMALL': {
      style: { color: theme.colors.strong, fontFamily: 'Raleway_300Light' },
      props: {},
    },
    'HEADING-1': {
      style: {
        color: 'rgb(37, 37, 37)',
        fontFamily: 'Raleway_700Bold',
        fontSize: 32,
        textAlign: 'center',
      },
      props: {},
    },
    'HEADING-2': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Raleway_700Bold',
        fontSize: 24,
        textAlign: 'center',
        typography: theme.typography.headline4,
      },
      props: {},
    },
    'HEADING-6': {
      style: {
        color: 'rgb(32, 32, 32)',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 16,
        lineHeight: 24,
      },
      props: {},
    },
    SUBTITLE: {
      style: {
        alignSelf: 'auto',
        color: 'rgb(52, 52, 52)',
        fontFamily: 'Raleway_500Medium',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
      },
      props: {},
    },
    'SUBTITLE-SMALL': {
      style: {
        color: 'rgb(100, 100, 100)',
        fontFamily: 'Raleway_400Regular',
        fontSize: 12,
        letterSpacing: 0.48,
        lineHeight: 16,
        textTransform: 'uppercase',
      },
      props: {},
    },
    Text: { style: { color: theme.colors.strong }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
    'Button Primary': {
      style: {
        backgroundColor: 'rgb(38, 38, 38)',
        borderColor: 'rgb(38, 38, 38)',
        borderRadius: 31,
        borderWidth: 1,
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Raleway_600SemiBold',
        padding: 20,
        width: '100%',
      },
      props: {},
    },
    'Button Secondary': {
      style: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: theme.colors['Custom Color_37'],
        borderRadius: 31,
        borderWidth: 1,
        color: theme.colors['Accent Color'],
        fontFamily: 'Raleway_600SemiBold',
        padding: 20,
        width: '100%',
      },
      props: {},
    },
    'Button Tertiary': {
      style: {
        backgroundColor: 'rgb(229, 72, 77)',
        borderRadius: 31,
        fontFamily: 'Raleway_700Bold',
        fontSize: 16,
        height: 56,
        lineHeight: 18,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
      },
      props: {},
    },
    'save-button': {
      style: {
        backgroundColor: '"rgb(240, 240, 240)"',
        borderRadius: 31,
        color: 'rgb(48, 48, 48)',
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 16,
        lineHeight: 24,
      },
      props: {},
    },
  });

export const BottomSheetStyles = theme =>
  StyleSheet.create({
    'Bottom Sheet': {
      style: {
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
      },
      props: {},
    },
  });

export const VStackStyles = theme =>
  StyleSheet.create({
    'V Stack': { style: { flexDirection: 'column' }, props: {} },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'email-input': {
      style: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(93, 93, 93)',
        borderRadius: 16,
        borderWidth: 1,
        color: 'rgb(148, 148, 148)',
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
      },
      props: {},
    },
    'password-input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors['Custom Color'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderWidth: 1,
        color: theme.colors['Input Color'],
        fontFamily: 'Raleway_500Medium',
        height: 56,
        paddingBottom: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 0,
        width: '100%',
      },
      props: {
        placeholderTextColor: theme.colors['Light'],
      },
    },
    'text-input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors['Custom Color'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderWidth: 1,
        color: theme.colors['Input Color'],
        fontFamily: 'Raleway_500Medium',
        height: 56,
        paddingBottom: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 0,
        width: '100%',
      },
      props: {
        placeholderTextColor: theme.colors['Light'],
      },
    },
  });

export const LinearGradientStyles = theme =>
  StyleSheet.create({ 'Linear Gradient': { style: { flex: 1 }, props: {} } });

export const HStackStyles = theme =>
  StyleSheet.create({
    'H Stack': {
      style: { alignItems: 'center', flexDirection: 'row' },
      props: {},
    },
  });

export const LinkStyles = theme =>
  StyleSheet.create({
    Link: { style: { color: theme.colors.primary }, props: {} },
    SKIP: {
      style: {
        alignSelf: 'flex-end',
        color: theme.colors['Typography Color'],
        fontFamily: 'Raleway_400Regular',
        textDecorationLine: 'underline',
      },
      props: {},
    },
    'under-link': {
      style: {
        color: 'rgb(32, 32, 32)',
        fontFamily: 'Raleway_600SemiBold',
        textDecorationLine: 'underline',
      },
      props: {},
    },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: { style: { height: 300, width: '100%' }, props: {} },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { style: { flex: 1 }, props: {} } });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });

export const ZStackStyles = theme =>
  StyleSheet.create({
    'Z Stack': { style: { flexDirection: 'row' }, props: {} },
  });

export const AccordionGroupStyles = theme =>
  StyleSheet.create({
    Accordion: {
      style: {
        fontSize: 16,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const SliderStyles = theme =>
  StyleSheet.create({
    Slider: { style: { marginLeft: 12, marginRight: 12 }, props: {} },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
      },
      props: {},
    },
  });

export const SwitchRowStyles = theme =>
  StyleSheet.create({
    'Switch Row': { style: { marginLeft: 0, marginRight: 0 }, props: {} },
  });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({
    'Swipeable Item': { style: { overflow: 'hidden' }, props: {} },
  });

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({
    'Action Sheet Item': { style: { textAlign: 'center' }, props: {} },
  });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'number-input': {
      style: {
        borderBottomWidth: 1,
        borderColor: 'rgb(93, 93, 93)',
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        color: 'rgb(148, 148, 148)',
        fontFamily: 'Raleway_400Regular',
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
      },
      props: {},
    },
  });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { style: { minHeight: 40 }, props: {} } });

export const SwitchStyles = theme =>
  StyleSheet.create({
    switch: {
      style: { height: 24, width: 44 },
      props: {
        activeTrackColor: theme.colors['Custom Color_37'],
      },
    },
  });
