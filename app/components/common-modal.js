import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connectModal } from 'redux-modal'
import { ModalName } from '../constants'
import I18nUtils from '../utils/i18n-utils'

class CommonModal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    modalClass: PropTypes.string,
    headerClass: PropTypes.string,
    bodyClass: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired
    ]),
    handleHide: PropTypes.func.isRequired,
    okFunction: PropTypes.func,
    closeFunction: PropTypes.func,
    hideCloseButton: PropTypes.bool
  }

  render() {
    let {
      show,
      modalClass,
      headerClass,
      bodyClass,
      title,
      message,
      handleHide,
      okFunction,
      closeFunction,
      hideCloseButton
    } = this.props
    title = !title ? I18nUtils.t('default-modal-title') : title

    return (
      <Modal isOpen={show} className={modalClass}>
        {title && <ModalHeader className={headerClass}>{title}</ModalHeader>}
        <ModalBody className={bodyClass}>{message}</ModalBody>
        <ModalFooter>
          {okFunction && (
            <div>
              <Button className="mr-2" color="danger" onClick={okFunction}>
                {I18nUtils.t('ok')}
              </Button>{' '}
              <Button color="primary" onClick={handleHide}>
                {I18nUtils.t('cancel')}
              </Button>
            </div>
          )}

          {closeFunction && !hideCloseButton && (
            <Button color="primary" onClick={closeFunction}>
              {I18nUtils.t('close')}
            </Button>
          )}
          {!okFunction && !closeFunction && !hideCloseButton && (
            <Button color="primary" onClick={handleHide}>
              {I18nUtils.t('close')}
            </Button>
          )}
        </ModalFooter>
      </Modal>
    )
  }
}

export default connectModal({ name: ModalName.COMMON })(CommonModal)
