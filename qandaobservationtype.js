// source: mappings.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.QandAObservationType');
goog.provide('proto.QandAObservationType.Answer');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QandAObservationType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.QandAObservationType.repeatedFields_, null);
};
goog.inherits(proto.QandAObservationType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.QandAObservationType.displayName = 'proto.QandAObservationType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QandAObservationType.Answer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.QandAObservationType.Answer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.QandAObservationType.Answer.displayName = 'proto.QandAObservationType.Answer';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.QandAObservationType.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QandAObservationType.prototype.toObject = function(opt_includeInstance) {
  return proto.QandAObservationType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QandAObservationType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QandAObservationType.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    questionClass: jspb.Message.getFieldWithDefault(msg, 2, ""),
    primaryQuestionCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    questionGroupInstance: jspb.Message.getFieldWithDefault(msg, 4, ""),
    uniqueAnswersList: jspb.Message.toObjectList(msg.getUniqueAnswersList(),
    proto.QandAObservationType.Answer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QandAObservationType}
 */
proto.QandAObservationType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QandAObservationType;
  return proto.QandAObservationType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QandAObservationType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QandAObservationType}
 */
proto.QandAObservationType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionClass(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryQuestionCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionGroupInstance(value);
      break;
    case 5:
      var value = new proto.QandAObservationType.Answer;
      reader.readMessage(value,proto.QandAObservationType.Answer.deserializeBinaryFromReader);
      msg.addUniqueAnswers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QandAObservationType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.QandAObservationType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.QandAObservationType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QandAObservationType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuestionClass();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrimaryQuestionCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuestionGroupInstance();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUniqueAnswersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.QandAObservationType.Answer.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QandAObservationType.Answer.prototype.toObject = function(opt_includeInstance) {
  return proto.QandAObservationType.Answer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QandAObservationType.Answer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QandAObservationType.Answer.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    qandaKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    categoricalUnitOfMeasure: jspb.Message.getFieldWithDefault(msg, 4, ""),
    numericUnitOfMeasure: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QandAObservationType.Answer}
 */
proto.QandAObservationType.Answer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QandAObservationType.Answer;
  return proto.QandAObservationType.Answer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QandAObservationType.Answer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QandAObservationType.Answer}
 */
proto.QandAObservationType.Answer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQandaKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoricalUnitOfMeasure(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumericUnitOfMeasure(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QandAObservationType.Answer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.QandAObservationType.Answer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.QandAObservationType.Answer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QandAObservationType.Answer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQandaKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCategoricalUnitOfMeasure();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNumericUnitOfMeasure();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string question_code = 1;
 * @return {string}
 */
proto.QandAObservationType.Answer.prototype.getQuestionCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType.Answer} returns this
 */
proto.QandAObservationType.Answer.prototype.setQuestionCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.QandAObservationType.Answer.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType.Answer} returns this
 */
proto.QandAObservationType.Answer.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string qanda_key = 3;
 * @return {string}
 */
proto.QandAObservationType.Answer.prototype.getQandaKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType.Answer} returns this
 */
proto.QandAObservationType.Answer.prototype.setQandaKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string categorical_unit_of_measure = 4;
 * @return {string}
 */
proto.QandAObservationType.Answer.prototype.getCategoricalUnitOfMeasure = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType.Answer} returns this
 */
proto.QandAObservationType.Answer.prototype.setCategoricalUnitOfMeasure = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 numeric_unit_of_measure = 5;
 * @return {number}
 */
proto.QandAObservationType.Answer.prototype.getNumericUnitOfMeasure = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.QandAObservationType.Answer} returns this
 */
proto.QandAObservationType.Answer.prototype.setNumericUnitOfMeasure = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string entity_type = 1;
 * @return {string}
 */
proto.QandAObservationType.prototype.getEntityType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType} returns this
 */
proto.QandAObservationType.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string question_class = 2;
 * @return {string}
 */
proto.QandAObservationType.prototype.getQuestionClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType} returns this
 */
proto.QandAObservationType.prototype.setQuestionClass = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string primary_question_code = 3;
 * @return {string}
 */
proto.QandAObservationType.prototype.getPrimaryQuestionCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType} returns this
 */
proto.QandAObservationType.prototype.setPrimaryQuestionCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string question_group_instance = 4;
 * @return {string}
 */
proto.QandAObservationType.prototype.getQuestionGroupInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.QandAObservationType} returns this
 */
proto.QandAObservationType.prototype.setQuestionGroupInstance = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Answer unique_answers = 5;
 * @return {!Array<!proto.QandAObservationType.Answer>}
 */
proto.QandAObservationType.prototype.getUniqueAnswersList = function() {
  return /** @type{!Array<!proto.QandAObservationType.Answer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.QandAObservationType.Answer, 5));
};


/**
 * @param {!Array<!proto.QandAObservationType.Answer>} value
 * @return {!proto.QandAObservationType} returns this
*/
proto.QandAObservationType.prototype.setUniqueAnswersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.QandAObservationType.Answer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.QandAObservationType.Answer}
 */
proto.QandAObservationType.prototype.addUniqueAnswers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.QandAObservationType.Answer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.QandAObservationType} returns this
 */
proto.QandAObservationType.prototype.clearUniqueAnswersList = function() {
  return this.setUniqueAnswersList([]);
};


