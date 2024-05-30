import React from "react";
import { SimpleStyleFlatList, TextInput, VStack } from "@kali/ui";

import { TextStyles } from "../typography.stylesheet";
import { TextInputStyles } from "./Input.stylesheet";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

type EmailInputProps = {
  onChange: (value: string) => void;
  value: string;
  errors: string[];
  placeholder: string;
  theme: KaliThemeType;
  onSubmit?: () => void;
  submitLabel?: string;
};

export default function EmailInput({
  onChange,
  value,
  errors,
  placeholder,
  theme,
  onSubmit,
  submitLabel,
}: EmailInputProps) {
  return (
    <VStack>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        changeTextDelay={500}
        onChangeText={onChange}
        webShowOutline={true}
        returnKeyType={submitLabel as any}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        autoComplete="email"
        placeholderTextColor={theme.colors.tertiary}
        keyboardType="email-address"
        style={[
          TextInputStyles(theme).TextInput,
          errors.length > 0 ? TextInputStyles(theme).InputErrorMessage : {},
        ]}
        value={value}
      />
      <SimpleStyleFlatList
        data={errors}
        style={{
          height: 1 * 24,
          marginTop: 8,
        }}
        scrollEnabled={false}
        horizontal={false}
        inverted={false}
        keyExtractor={(listData, index) => `${index} - ${listData}`}
        keyboardShouldPersistTaps={"never"}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => {
          const listData = item;
          return (
            <Text
              key={item}
              accessible={true}
              style={[
                StyleSheet.compose(
                  TextStyles(theme).Body,
                  TextStyles(theme).ErrorMessage
                ),
              ]}
            >
              {listData}
            </Text>
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      />
    </VStack>
  );
}
