import { initializeApp } from "firebase-admin/app";

import sendPushNotificationFunction, {
  SendPushNotificationArgument,
} from "./src/sendPushNotification";
import processPushNotificationReceiptsFunction, {
  ProcessPushNotificationReceiptsArgument,
} from "./src/processPushNotificationReceipts";
import sweepOldAccountsFunction from "./src/sweepOldAccounts";
import syncDBFundsFunction from "./src/syncDBFunds";
import writeLogFunction from "./src/writeLog";
import updateUserClaimsFunction from "./src/updateUserClaims";
import handleDeviceDocumentWriteFunction from "./src/handleDeviceDocumentWrite";
import { Runnable } from "firebase-functions/v1";

// TODO type all of these using CloudFunction and HttpsFunction by creating a with argument types for all of these functions

initializeApp({ projectId: "react-danceblue" });

export const sendPushNotification: Runnable<SendPushNotificationArgument> =
  sendPushNotificationFunction;

export const processPushNotificationReceipts: Runnable<ProcessPushNotificationReceiptsArgument> =
  processPushNotificationReceiptsFunction;

export const sweepOldAccounts = sweepOldAccountsFunction;

export const syncDBFunds = syncDBFundsFunction;

export const writeLog = writeLogFunction;

export const updateUserClaims = updateUserClaimsFunction;

export const handleDeviceDocumentWrite = handleDeviceDocumentWriteFunction;
