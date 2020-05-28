
import { DynamoDB } from 'aws-sdk'

new DynamoDB().batchWriteItem().then(({ UnprocessedItems }) => UnprocessedItems)
