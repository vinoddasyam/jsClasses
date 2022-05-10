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

goog.provide('proto.Mapping');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.AdditionalCriteria');
goog.require('proto.FieldTestingSuiteObservationType');
goog.require('proto.QandAObservationType');

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
proto.Mapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Mapping.repeatedFields_, null);
};
goog.inherits(proto.Mapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mapping.displayName = 'proto.Mapping';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Mapping.repeatedFields_ = [4];



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
proto.Mapping.prototype.toObject = function(opt_includeInstance) {
  return proto.Mapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mapping.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldTestingSuiteObservationType: (f = msg.getFieldTestingSuiteObservationType()) && proto.FieldTestingSuiteObservationType.toObject(includeInstance, f),
    qandaObservationType: (f = msg.getQandaObservationType()) && proto.QandAObservationType.toObject(includeInstance, f),
    additionalCriteriaList: jspb.Message.toObjectList(msg.getAdditionalCriteriaList(),
    proto.AdditionalCriteria.toObject, includeInstance)
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
 * @return {!proto.Mapping}
 */
proto.Mapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mapping;
  return proto.Mapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mapping}
 */
proto.Mapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.FieldTestingSuiteObservationType;
      reader.readMessage(value,proto.FieldTestingSuiteObservationType.deserializeBinaryFromReader);
      msg.setFieldTestingSuiteObservationType(value);
      break;
    case 3:
      var value = new proto.QandAObservationType;
      reader.readMessage(value,proto.QandAObservationType.deserializeBinaryFromReader);
      msg.setQandaObservationType(value);
      break;
    case 4:
      var value = new proto.AdditionalCriteria;
      reader.readMessage(value,proto.AdditionalCriteria.deserializeBinaryFromReader);
      msg.addAdditionalCriteria(value);
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
proto.Mapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldTestingSuiteObservationType();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.FieldTestingSuiteObservationType.serializeBinaryToWriter
    );
  }
  f = message.getQandaObservationType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.QandAObservationType.serializeBinaryToWriter
    );
  }
  f = message.getAdditionalCriteriaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.AdditionalCriteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.Mapping.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Mapping} returns this
 */
proto.Mapping.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FieldTestingSuiteObservationType field_testing_suite_observation_type = 2;
 * @return {?proto.FieldTestingSuiteObservationType}
 */
proto.Mapping.prototype.getFieldTestingSuiteObservationType = function() {
  return /** @type{?proto.FieldTestingSuiteObservationType} */ (
    jspb.Message.getWrapperField(this, proto.FieldTestingSuiteObservationType, 2));
};


/**
 * @param {?proto.FieldTestingSuiteObservationType|undefined} value
 * @return {!proto.Mapping} returns this
*/
proto.Mapping.prototype.setFieldTestingSuiteObservationType = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mapping} returns this
 */
proto.Mapping.prototype.clearFieldTestingSuiteObservationType = function() {
  return this.setFieldTestingSuiteObservationType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mapping.prototype.hasFieldTestingSuiteObservationType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QandAObservationType qanda_observation_type = 3;
 * @return {?proto.QandAObservationType}
 */
proto.Mapping.prototype.getQandaObservationType = function() {
  return /** @type{?proto.QandAObservationType} */ (
    jspb.Message.getWrapperField(this, proto.QandAObservationType, 3));
};


/**
 * @param {?proto.QandAObservationType|undefined} value
 * @return {!proto.Mapping} returns this
*/
proto.Mapping.prototype.setQandaObservationType = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Mapping} returns this
 */
proto.Mapping.prototype.clearQandaObservationType = function() {
  return this.setQandaObservationType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Mapping.prototype.hasQandaObservationType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated AdditionalCriteria additional_criteria = 4;
 * @return {!Array<!proto.AdditionalCriteria>}
 */
proto.Mapping.prototype.getAdditionalCriteriaList = function() {
  return /** @type{!Array<!proto.AdditionalCriteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AdditionalCriteria, 4));
};


/**
 * @param {!Array<!proto.AdditionalCriteria>} value
 * @return {!proto.Mapping} returns this
*/
proto.Mapping.prototype.setAdditionalCriteriaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.AdditionalCriteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AdditionalCriteria}
 */
proto.Mapping.prototype.addAdditionalCriteria = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.AdditionalCriteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Mapping} returns this
 */
proto.Mapping.prototype.clearAdditionalCriteriaList = function() {
  return this.setAdditionalCriteriaList([]);
};


